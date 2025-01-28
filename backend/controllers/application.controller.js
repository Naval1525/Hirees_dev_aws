import { docClient } from "../config/aws.config.js";
import { Application } from "../models/application.model.js";
import { v4 as uuidv4 } from "uuid";
import nodemailer from 'nodemailer'
import { GetCommand, PutCommand, QueryCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { JobTable } from "../models/job.model.js";
import { CompanyTable } from "../models/company.model.js";
import { dynamoDB } from "../models/company.model.js";


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
const sendApplicationStatusUpdate = async (applicantEmail, jobTitle, status, companyName) => {
  const statusColors = {
    accepted: '#22c55e',
    rejected: '#ef4444',
    pending: '#f59e0b'
  };

  const statusMessages = {
    accepted: 'Congratulations! Your application has been accepted.',
    rejected: 'Thank you for your interest. Unfortunately, your application was not selected.',
    pending: 'Your application is currently under review.'
  };

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          color: #333;
        }
        .header {
          background-color: ${statusColors[status]};
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          padding: 20px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
        }
        .footer {
          background-color: #f1f5f9;
          padding: 15px;
          text-align: center;
          font-size: 12px;
          border-radius: 0 0 8px 8px;
        }
        .status-badge {
          display: inline-block;
          padding: 8px 16px;
          background-color: ${statusColors[status]};
          color: white;
          border-radius: 20px;
          margin: 10px 0;
        }
        .company-name {
          color: #2563eb;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Application Status Update</h1>
        </div>
        <div class="content">
          <p>Hello,</p>
          <p>${statusMessages[status]}</p>
          <p>Position: <strong>${jobTitle}</strong><br>
          Company: <span class="company-name">${companyName}</span></p>
          <div class="status-badge">
            Status: ${status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
          ${status === 'accepted' ? `
          <p>We will contact you shortly with next steps.</p>
          ` : ''}
          <p>If you have any questions, please don't hesitate to reach out.</p>
          <p>Best regards,<br>${companyName} Recruitment Team</p>
        </div>
        <div class="footer">
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: applicantEmail,
    subject: `Application Status Update - ${jobTitle}`,
    html
  };

  return transporter.sendMail(mailOptions);
};
const sendJobApplicationNotification = async (jobCreatorEmail, applicantName, jobTitle, applicationId) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          font-family: Arial, sans-serif;
          color: #333;
        }
        .header {
          background-color: #2563eb;
          color: white;
          padding: 20px;
          text-align: center;
          border-radius: 8px 8px 0 0;
        }
        .content {
          padding: 20px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
        }
        .footer {
          background-color: #f1f5f9;
          padding: 15px;
          text-align: center;
          font-size: 12px;
          border-radius: 0 0 8px 8px;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background-color: #2563eb;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          margin: 20px 0;
        }
        .highlight {
          color: #2563eb;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>New Job Application Received</h1>
        </div>
        <div class="content">
          <p>Hello,</p>
          <p>You have received a new application for the position of <span class="highlight">${jobTitle}</span>.</p>
          <p>Applicant Name: <span class="highlight">${applicantName}</span></p>
          <p>Application ID: ${applicationId}</p>
          <p>Please review the application and take appropriate action.</p>
          <a href="${process.env.WEBSITE_URL}/applications/${applicationId}" class="button">Review Application</a>
          <p>Best regards,<br>Your Recruitment Team</p>
        </div>
        <div class="footer">
          <p>This is an automated message. Please do not reply to this email.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: jobCreatorEmail,
    subject: `New Application Received for ${jobTitle}`,
    html
  };

  return transporter.sendMail(mailOptions);
};




export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const { id: jobId } = req.params;

    console.log("User ID:", userId);
    console.log("Job ID:", jobId);

    // Check if user has already applied
    const { Items: existingApplications } = await docClient.send(
      new QueryCommand({
        TableName: "Applications_dev",
        IndexName: "job-index",
        KeyConditionExpression: "job = :job AND applicant = :applicant",
        ExpressionAttributeValues: {
          ":job": jobId,
          ":applicant": userId,
        },
      })
    );

    if (existingApplications && existingApplications.length > 0) {
      return res.status(400).json({
        error: "You have already applied for this job.",
        status: false,
      });
    }

    // Fetch job details
    const { Item: jobDetails } = await docClient.send(
      new GetCommand({
        TableName: "Jobs_dev",
        Key: {
          jobId: jobId,
        },
      })
    );

    if (!jobDetails) {
      return res.status(404).json({
        error: "Job not found.",
        status: false,
      });
    }

    const { created_by: jobCreatorEmail, title: jobTitle, companyName } = jobDetails;

    // Fetch applicant details
    const { Items: applicantDetails } = await docClient.send(
      new QueryCommand({
        // TableName: "Users",
        TableName: "Users_dev",
        KeyConditionExpression: "#email = :email",
        ExpressionAttributeNames: {
          "#email": "email",
        },
        ExpressionAttributeValues: {
          ":email": userId,
        },
      })
    );

    if (!applicantDetails || applicantDetails.length === 0) {
      return res.status(404).json({
        error: "Applicant not found.",
        status: false,
      });
    }

    const applicantData = applicantDetails[0];
    const applicantName = applicantData.profile?.name || "Applicant";
    const applicantEmail = applicantData.email || userId;

    // Create a new application record
    const applicationId = uuidv4();
    const newApplication = {
      id: applicationId,
      job: jobId,
      applicant: userId,
      status: "pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await docClient.send(
      new PutCommand({
        TableName: "Applications_dev",
        Item: newApplication,
      })
    );

    // Send emails
    try {
      // Send notification to job creator
      await sendJobApplicationNotification(
        jobCreatorEmail,
        applicantName,
        jobTitle,
        applicationId
      );

      // Send status update to applicant
      await sendApplicationStatusUpdate(
        applicantEmail,
        jobTitle,
        "pending",
        companyName || "Company"
      );
    } catch (emailError) {
      console.error("Error sending email notifications:", emailError);
      // Continue with the response even if email sending fails
    }

    return res.status(201).json({
      message: "Job application submitted successfully.",
      status: true,
      application: newApplication,
    });
  } catch (err) {
    console.error("Apply job error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};

// Get Applied Jobs

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id; // Assuming `req.id` is the applicant's user ID

    // Query applications using the applicant GSI, sorted by application date
    const { Items: applications } = await dynamoDB.query({
      TableName: "Applications_dev",
      IndexName: "applicant-index",
      KeyConditionExpression: "applicant = :applicantId",
      ExpressionAttributeValues: {
        ":applicantId": userId,
      },
      // Sort by application date (assuming applicationDate is a field in your items)
      ScanIndexForward: false, // false means descending order (newest first)
    });

    if (!applications || applications.length === 0) {
      return res.status(200).json({
        status: true,
        applications: [],
      });
    }

    // Get job and company details for each application
    const populatedApplications = await Promise.all(
      applications.map(async (application) => {
        try {
          // Get job details for the application
          const { Item: job } = await dynamoDB.get({
            TableName: "Jobs_dev",
            Key: {
              jobId: application.job, // Fetch the job using the jobId
            },
          });

          let populatedJob = null;
          if (job) {
            // Get company details associated with the job
            const { Item: company } = await dynamoDB.get({
              TableName: "Companies_dev",
              Key: {
                companyId: job.companyId, // Use job's companyId to fetch the company
              },
            });

            // Combine job and company data
            populatedJob = {
              ...job,
              company: company || null, // Include company details or null if not found
            };
          }

          // Return application with the populated job and company details
          return {
            ...application,
            job: populatedJob,
          };
        } catch (error) {
          console.error("Error populating job/company details:", error);
          // Return application without job/company if there's an error
          return application;
        }
      })
    );

    return res.status(200).json({
      status: true,
      applications: populatedApplications,
    });
  } catch (err) {
    console.error("Error fetching applications:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};




// Get Applicants for a Job

export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;

    // First, get all applications for the job
    const applications = await docClient.query({
      TableName: "Applications_dev",
      IndexName: "job-index",
      KeyConditionExpression: "job = :job",
      ExpressionAttributeValues: {
        ":job": jobId,
      },
    });

    if (!applications.Items || applications.Items.length === 0) {
      return res.status(404).json({
        error: "No applications found",
        status: false,
      });
    }

    // Get user details for each applicant
    const applicantsWithDetails = await Promise.all(
      applications.Items.map(async (application) => {
        try {
          // Get user details
          const userResult = await docClient.get({
            // TableName: "Users",
            TableName: "Users_dev",
            Key: {
              email: application.applicant,
            },
          });

          const userDetails = userResult.Item;

          if (!userDetails) {
            throw new Error(
              `User not found for email: ${application.applicant}`
            );
          }

          return {
            applicationId: application.id,
            jobId: application.job,
            status: application.status,
            createdAt: application.createdAt,
            updatedAt: application.updatedAt,
            applicant: {
              fullName: userDetails.fullname,
              email: userDetails.email,
              phoneNumber: userDetails.phoneNumber || null,
              currentLocation: userDetails.currentLocation || null,
              willingToRelocate: userDetails.willingToRelocate || false,
              visaStatus: userDetails.visaStatus || null,
              jobTitle: userDetails.jobTitle || null,
              bio: userDetails.bio || null,
              skills: userDetails.skills || [],
              resume: userDetails.resume || null,
              resumeOriginalName: userDetails.resumeOriginalName || null,
              profilePhoto: userDetails.profilePhoto || null,
              profile: userDetails.profile || {},
            },
          };
        } catch (error) {
          console.error(
            `Error fetching user details for ${application.applicant}:`,
            error
          );
          // Return application with minimal user info if user details fetch fails
          return {
            applicationId: application.id,
            jobId: application.job,
            status: application.status,
            createdAt: application.createdAt,
            updatedAt: application.updatedAt,
            applicant: {
              email: application.applicant,
              error: "Failed to fetch complete user details",
            },
          };
        }
      })
    );

    // Sort applications by creation date (newest first)
    applicantsWithDetails.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return res.status(200).json({
      status: true,
      applications: applicantsWithDetails,
    });
  } catch (err) {
    console.error("Get applicants error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};





// Update Application Status

// export const updateStatus = async (req, res) => {
//   try {
//     const { status } = req.body;
//     const applicationId = req.params.id;

//     if (!status) {
//       return res.status(400).json({
//         error: "Status is required",
//         status: false,
//       });
//     }

//     if (!["pending", "accepted", "rejected"].includes(status.toLowerCase())) {
//       return res.status(400).json({
//         error: "Invalid status value",
//         status: false,
//       });
//     }

//     const { Attributes } = await docClient.send(
//       new UpdateCommand({
//         TableName: "Applications_dev",
//         Key: { id: applicationId },
//         UpdateExpression: "set #status = :status, updatedAt = :updatedAt",
//         ExpressionAttributeNames: {
//           "#status": "status",
//         },
//         ExpressionAttributeValues: {
//           ":status": status.toLowerCase(),
//           ":updatedAt": new Date().toISOString(),
//         },
//         ReturnValues: "ALL_NEW",
//       })
//     );

//     if (!Attributes) {
//       return res.status(400).json({
//         error: "Application not found",
//         status: false,
//       });
//     }

//     await sendApplicationStatusUpdate(applicantEmail, jobTitle, status, companyName);

//     return res.status(200).json({
//       status: true,
//       message: "Status updated successfully",
//       application: Attributes,
//     });
//   } catch (err) {
//     console.error("Update application error:", err);
//     return res.status(500).json({
//       error: "Internal server error",
//       details: err.message,
//     });
//   }
// };
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;

    if (!status) {
      return res.status(400).json({
        error: "Status is required",
        status: false,
      });
    }

    if (!["pending", "accepted", "rejected"].includes(status.toLowerCase())) {
      return res.status(400).json({
        error: "Invalid status value",
        status: false,
      });
    }

    // Fetch the application details to retrieve applicant email and job title
    const application = await Application.get(applicationId);

    if (!application) {
      return res.status(404).json({
        error: "Application not found",
        status: false,
      });
    }

    const { applicant, job: jobTitle } = application; // Extract relevant fields
    const applicantEmail = applicant; // Assuming `applicant` holds the email
    const companyName = "Your Company"; // Replace with logic to fetch company name if needed

    // Update the application status
    const { Attributes } = await docClient.send(
      new UpdateCommand({
        TableName: "Applications_dev",
        Key: { id: applicationId },
        UpdateExpression: "set #status = :status, updatedAt = :updatedAt",
        ExpressionAttributeNames: {
          "#status": "status",
        },
        ExpressionAttributeValues: {
          ":status": status.toLowerCase(),
          ":updatedAt": new Date().toISOString(),
        },
        ReturnValues: "ALL_NEW",
      })
    );

    if (!Attributes) {
      return res.status(400).json({
        error: "Application not found during update",
        status: false,
      });
    }

    // Send email notification
    await sendApplicationStatusUpdate(applicantEmail, jobTitle, status, companyName);

    return res.status(200).json({
      status: true,
      message: "Status updated successfully",
      application: Attributes,
    });
  } catch (err) {
    console.error("Update application error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};
