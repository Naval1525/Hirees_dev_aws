import { dynamoDB } from "../config/aws.config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";
import { uploadToS3 } from "../utils/s3Utils.js";
import nodemailer from 'nodemailer'
// const TABLE_NAME = 'Users';
const TABLE_NAME = 'Users_dev';
import { docClient } from "../config/aws.config.js";
import { ScanCommand } from "@aws-sdk/client-dynamodb";


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || "navalbihani15@gmail.com",
    pass: process.env.EMAIL_APP_PASSWORD || "rsse sotb vxtr xvmj"
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Different email templates
const emailTemplates = {
  welcome: (fullname, role) => `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #4A90E2; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background-color: #ffffff; padding: 20px; border-radius: 0 0 5px 5px; border: 1px solid #dedede; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to Our Platform!</h1>
        </div>
        <div class="content">
          <h2>Hello ${fullname}!</h2>
          <p>Thank you for registering as a ${role} on our platform. We're excited to have you join our community!</p>
          ${role === 'student' ?
            `<p>As a student, you'll have access to:</p>
            <ul>
              <li>Job postings tailored to your profile</li>
              <li>Resume building tools</li>
              <li>Career guidance resources</li>
            </ul>` :
            `<p>You'll have access to our platform's features and resources designed specifically for ${role}s.</p>`
          }
          <p>If you have any questions, feel free to reach out to our support team.</p>
        </div>
      </div>
    </body>
    </html>
  `,

  profileUpdate: (fullname) => `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #28a745; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background-color: #ffffff; padding: 20px; border-radius: 0 0 5px 5px; border: 1px solid #dedede; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Profile Updated</h1>
        </div>
        <div class="content">
          <h2>Hello ${fullname}!</h2>
          <p>Your profile has been successfully updated.</p>
          <p>If you didn't make these changes, please contact our support team immediately.</p>
        </div>
      </div>
    </body>
    </html>
  `,

  loginAlert: (fullname, loginTime, deviceInfo) => `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #ffc107; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background-color: #ffffff; padding: 20px; border-radius: 0 0 5px 5px; border: 1px solid #dedede; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Login Detected</h1>
        </div>
        <div class="content">
          <h2>Hello ${fullname}!</h2>
          <p>A new login was detected on your account.</p>
          <p>Time: ${loginTime}</p>
          <p>Device Info: ${deviceInfo}</p>
          <p>If this wasn't you, please secure your account immediately.</p>
        </div>
      </div>
    </body>
    </html>
  `
};

// Send email function
const sendEmail = async (type, userEmail, data) => {
  try {
    let subject, html;

    switch(type) {
      case 'welcome':
        subject = 'Welcome to Our Platform!';
        html = emailTemplates.welcome(data.fullname, data.role);
        break;
      case 'profileUpdate':
        subject = 'Profile Update Confirmation';
        html = emailTemplates.profileUpdate(data.fullname);
        break;
      case 'loginAlert':
        subject = 'New Login Detected';
        html = emailTemplates.loginAlert(data.fullname, data.loginTime, data.deviceInfo);
        break;
    }

    const mailOptions = {
      from: `"Your Platform Name" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject,
      html
    };

    await transporter.sendMail(mailOptions);
    console.log(`${type} email sent successfully to ${userEmail}`);
    return true;
  } catch (error) {
    console.error(`Failed to send ${type} email:`, error);
    return false;
  }
};
//register user

  export const register = async (req, res) => {
    try {
      const {
        fullname,
        email,
        phoneNumber,
        password,
        role,
        currentLocation,
        jobDomain,
        // willingToRelocate,
        // visaStatus,
        jobTitle
      } = req.body;

      // Validate input fields
      if (!fullname || !email || !phoneNumber || !password || !role) {
        return res.status(400).json({
          error: "All fields are required",
          status: false,
        });
      }

      // Additional validation for student-specific fields
      if (role === 'student' && (!currentLocation || !jobTitle)) {
        return res.status(400).json({
          error: "All student-specific fields are required",
          status: false,
        });
      }


      // Check if user exists
      const existingUser = await dynamoDB.get({
        // TableName: "Users_dev",
        TableName: "Users_dev",
        Key: { email }
      });

      if (existingUser.Item) {
        return res.status(400).json({
          error: "User already exists",
          status: false,
        });
      }

      // const file = req.file;
      // let cloudResponse;
      // if (file) {
      //   const fileUri = dataUri(file);
      //   cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      // }
      const file = req.file;
      let s3Response;
      if (file) {
        s3Response = await uploadToS3(file, 'profile-photos');
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Prepare user data
      const userData = {
        fullname,
        email,
        phoneNumber: phoneNumber.toString(),
        password: hashedPassword,
        role,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        profile: {
          profilePhoto: s3Response ? s3Response.url : null,
          bio: "",
          skills: [],
          resume: "",
          resumeOriginalName: ""

        }
      };

      // Add student-specific fields
      if (role === 'student') {
        userData.profile = {
          ...userData.profile,
          currentLocation,
          // willingToRelocate,
          // visaStatus,
          jobTitle,
          jobDomain
        };
      }

      // Save user to DynamoDB
      await dynamoDB.put({
        TableName: "Users_dev",
        Item: userData
      });
      await sendEmail('welcome', email, { fullname, role });

      // Return success response
      return res.status(201).json({
        message: "User registered successfully",
        status: true,
        user: {
          fullname: userData.fullname,
          email: userData.email,
          role: userData.role,
          profile: userData.profile
        },
      });
    } catch (err) {
      console.error("Registration error:", err);
      return res.status(500).json({
        error: "Internal server error",
        details: err.message,
      });
    }
  };




//update use


export const updateProfile = async (req, res) => {
  try {
    const {
      email,
      fullname,
      phoneNumber,
      bio,
      skills,
      jobDomain,
      currentLocation,
      willingToRelocate,
      visaStatus,
      jobTitle
    } = req.body;

    if (!email) {
      return res.status(400).json({
        error: "Email is required",
        status: false,
      });
    }

    // Get existing user
    const existingUser = await dynamoDB.get({
      TableName: "Users_dev",
      Key: { email }
    });

    if (!existingUser.Item) {
      return res.status(404).json({
        error: "User not found",
        status: false,
      });
    }

    // Handle file upload to S3
    const file = req.file;
    let s3Response;
    if (file) {
      s3Response = await uploadToS3(file, 'resumes');
    }

    // Process skills
    let skillsArray = skills
      ? skills.split(",").map((skill) => skill.trim()).filter(Boolean)
      : existingUser.Item.profile.skills;

    // Prepare update data
    const updateData = {
      fullname: fullname || existingUser.Item.fullname,
      phoneNumber: phoneNumber ? phoneNumber.toString() : existingUser.Item.phoneNumber,
      updatedAt: new Date().toISOString(),
      profile: {
        ...existingUser.Item.profile,
        bio: bio || existingUser.Item.profile.bio,
        skills: skillsArray,
        profilePhoto: existingUser.Item.profile.profilePhoto,
        jobDomain: jobDomain || existingUser.Item.profile.jobDomain
      }
    };

    // Update resume if new file uploaded
    if (s3Response) {
      updateData.profile.resume = s3Response.url;
      updateData.profile.resumeKey = s3Response.key; // Store S3 key for future reference
      updateData.profile.resumeOriginalName = file.originalname;
    }

    // Add student-specific fields if user is a student
    if (existingUser.Item.role === 'student') {
      updateData.profile = {
        ...updateData.profile,
        currentLocation: currentLocation || existingUser.Item.profile.currentLocation,
        willingToRelocate: willingToRelocate !== undefined
          ? willingToRelocate
          : existingUser.Item.profile.willingToRelocate,
        visaStatus: visaStatus || existingUser.Item.profile.visaStatus,
        jobTitle: jobTitle || existingUser.Item.profile.jobTitle
      };
    }

    // Update user in DynamoDB
    await dynamoDB.update({
      TableName: "Users_dev",
      Key: { email },
      UpdateExpression: "set #userData = :userData",
      ExpressionAttributeNames: {
        "#userData": "profile"
      },
      ExpressionAttributeValues: {
        ":userData": updateData.profile
      }
    });
    // await sendEmail('profileUpdate', email, { fullname: updateData.fullname });
    // Return updated user
    return res.status(200).json({
      message: "User updated successfully",
      status: true,
      user: {
        email,
        fullname: updateData.fullname,
        phoneNumber: updateData.phoneNumber,
        role: existingUser.Item.role,
        profile: updateData.profile,
      },
    });

  } catch (err) {
    console.error("Profile update error:", err);
    return res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
      status: false,
    });
  }
};



export const getStudents = async (req, res) => {
  try {
    const params = {
      TableName: "Users_dev",
      IndexName: "RoleIndex",
      KeyConditionExpression: "#role = :roleValue",
      ExpressionAttributeNames: {
        "#role": "role"
      },
      ExpressionAttributeValues: {
        ":roleValue": "student"
      }
    };

    const result = await dynamoDB.query(params);

    // Remove password from results
    const students = result.Items.map(student => {
      const { password, ...studentData } = student;
      return studentData;
    });

    res.status(200).json({
      success: true,
      message: "Students fetched successfully",
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch students",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    }

    const result = await dynamoDB.get({
      TableName: "Users_dev",
      Key: { email }
    });

    const user = result.Item;

    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }

    const tokenData = {
      userId: user.email // Using email as the unique identifier
    };

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

    // Remove password from user object
    const { password: userPassword, ...userData } = user;
    // await sendEmail('loginAlert', email, {
    //   fullname: user.fullname,
    //   loginTime: new Date().toLocaleString(),
    //   deviceInfo: req.headers['user-agent']
    // });

    return res.status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'strict',
        path: '/'
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user: userData,
        success: true
      });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
      success: false
    });
  }
};




//logout

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "User logged out successfully",
      status: true,
    });
  } catch (err) {
    console.error("Logout error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};



import { unmarshall } from "@aws-sdk/util-dynamodb";
import { GetCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";

const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Controller for initiating forgot password
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    // Get user by email (primary key)
    const getCommand = new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        email: email
      }
    });

    const { Item } = await docClient.send(getCommand);

    if (!Item) {
      return res.status(404).json({
        success: false,
        message: "User with this email doesn't exist",
      });
    }

    const verificationCode = generateVerificationCode();
    const expiryTime = Date.now() + 10 * 60 * 1000; // 10 minutes

    // Update user with reset code using email as the primary key
    const updateCommand = new UpdateCommand({
      TableName: TABLE_NAME,
      Key: {
        email: email
      },
      UpdateExpression: "SET resetPasswordCode = :code, resetPasswordExpires = :expiry",
      ExpressionAttributeValues: {
        ":code": verificationCode,
        ":expiry": expiryTime
      },
      ReturnValues: "NONE"
    });

    await docClient.send(updateCommand);

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Verification Code",
      html: `
        <h1>Password Reset Request</h1>
        <p>Your verification code is: <strong>${verificationCode}</strong></p>
        <p>This code will expire in 10 minutes.</p>
        <p>If you didn't request this, please ignore this email.</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Verification code sent to your email",
    });
  } catch (error) {
    console.error("Forgot password error:", error);
    res.status(500).json({
      success: false,
      message: "Error sending verification code",
    });
  }
};

// Controller for verifying the code
export const verifyCode = async (req, res) => {
  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({
        success: false,
        message: "Email and code are required",
      });
    }

    // Get user by email (primary key)
    const getCommand = new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        email: email
      }
    });

    const { Item } = await docClient.send(getCommand);

    if (!Item) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    const currentTime = Date.now();

    if (
      Item.resetPasswordCode !== code ||
      Item.resetPasswordExpires < currentTime
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    res.status(200).json({
      success: true,
      message: "Code verified successfully",
    });
  } catch (error) {
    console.error("Verify code error:", error);
    res.status(500).json({
      success: false,
      message: "Error verifying code",
    });
  }
};

// Controller for resetting the password
export const resetPassword = async (req, res) => {
  try {
    const { email, code, password } = req.body;

    if (!email || !code || !password) {
      return res.status(400).json({
        success: false,
        message: "Email, code, and password are required",
      });
    }

    // Get user by email (primary key)
    const getCommand = new GetCommand({
      TableName: TABLE_NAME,
      Key: {
        email: email
      }
    });

    const { Item } = await docClient.send(getCommand);

    if (!Item) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    const currentTime = Date.now();

    if (
      Item.resetPasswordCode !== code ||
      Item.resetPasswordExpires < currentTime
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired verification code",
      });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update password and clear reset fields
    const updateCommand = new UpdateCommand({
      TableName: TABLE_NAME,
      Key: {
        email: email
      },
      UpdateExpression: "SET password = :password REMOVE resetPasswordCode, resetPasswordExpires",
      ExpressionAttributeValues: {
        ":password": hashedPassword
      },
      ReturnValues: "NONE"
    });

    await docClient.send(updateCommand);

    res.status(200).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    console.error("Reset password error:", error);
    res.status(500).json({
      success: false,
      message: "Error resetting password",
    });
  }
};