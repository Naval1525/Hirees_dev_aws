import { docClient, dynamoDB } from "../config/aws.config.js";
import getdataUri from '../utils/datauri.js';
import cloudinary from "../utils/cloudinary.js";
import { v4 as uuidv4 } from 'uuid';
import { uploadToS3 } from '../utils/s3Utils.js'; // Adjust path as needed
import { DeleteObjectCommand } from "@aws-sdk/client-s3";


//register Compnay

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res.status(400).json({
        error: "Company name is required",
        status: false,
      });
    }

    // Check if user already has a company
    const userCompaniesParams = {
      TableName: "Companies_dev",
      IndexName: "UserIndex",
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": req.id,
      }
    };

    const userCompanies = await dynamoDB.query(userCompaniesParams);
    if (userCompanies.Items.length > 0) {
      return res.status(400).json({
        error: "User can only register one company",
        status: false,
      });
    }

    // Check if company name exists (case insensitive)
    const nameCheckParams = {
      TableName: "Companies_dev",
      IndexName: "NameIndex",
      KeyConditionExpression: "CompanyName = :CompanyName",
      ExpressionAttributeValues: {
        ":CompanyName": companyName.toLowerCase(),
      }
    };

    const existingCompany = await dynamoDB.query(nameCheckParams);
    if (existingCompany.Items.length > 0) {
      return res.status(400).json({
        error: "Company already exists",
        status: false,
      });
    }

    // Create new company
    const companyId = uuidv4();
    const company = {
      companyId,
      CompanyName: companyName,
      name_lower: companyName.toLowerCase(), // For case-insensitive searches
      userId: req.id,
      description: "",
      website: "",
      location: "",
      logo: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await dynamoDB.put({
      TableName: "Companies_dev",
      Item: company,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      status: true,
      company,
    });
  } catch (err) {
    console.error("Company registration error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};




//get company

export const getCompany = async (req, res) => {
  try {
    const params = {
      TableName: "Companies_dev",
      IndexName: "UserIndex",
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": req.id,
      },
    };

    const result = await dynamoDB.query(params);

    if (!result.Items || result.Items.length === 0) {
      return res.status(404).json({
        error: "No companies found for this user",
        status: false,
      });
    }

    return res.status(200).json({
      status: true,
      companies: result.Items,
    });
  } catch (err) {
    console.error("Get companies error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || id === 'undefined') {
      return res.status(400).json({
        status: false,
        message: "Invalid company ID provided",
      });
    }

    const result = await dynamoDB.get({
      TableName: "Companies_dev",
      Key: {
        companyId: id,
      },
    });

    if (!result.Item) {
      return res.status(404).json({
        status: false,
        message: "Company not found",
      });
    }

    res.status(200).json({
      status: true,
      data: result.Item,
    });
  } catch (error) {
    console.error("Get Company By ID Error:", error);
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};




//update company


export const updateCompany = async (req, res) => {
  try {
    const { CompanyName, description, website, location } = req.body;
    const companyId = req.params.id;
    const file = req.file;

    // Get existing company
    try {
      const { Item: company } = await docClient.get({
        TableName: "Companies_dev",
        Key: {
          companyId: companyId
        }
      });

      if (!company) {
        return res.status(404).json({
          error: "Company not found",
          status: false
        });
      }

      // Check if user owns the company
      if (company.userId !== req.id) {
        return res.status(403).json({
          error: "Not authorized to update this company",
          status: false
        });
      }

      // Handle file upload if present
      let s3Response;
      if (file) {
        try {
          s3Response = await uploadToS3(file, 'companies');

          // Delete old logo if exists
          if (company.logo) {
            try {
              const oldKey = company.logo.split('/').slice(-2).join('/');
              const deleteCommand = new DeleteObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: `companies/${oldKey}`
              });
              await s3Client.send(deleteCommand);
            } catch (deleteError) {
              console.error("Error deleting old logo:", deleteError);
              // Continue with update even if delete fails
            }
          }
        } catch (uploadError) {
          return res.status(500).json({
            error: "Failed to upload new logo",
            details: uploadError.message,
            status: false
          });
        }
      }

      // Prepare update expression
      let updateExpression = "SET updatedAt = :updatedAt";
      const expressionAttributeValues = {
        ":updatedAt": new Date().toISOString()
      };
      const expressionAttributeNames = {};

      // Add fields that are being updated
      if (CompanyName) {
        updateExpression += ", CompanyName = :CompanyName";
        expressionAttributeValues[":CompanyName"] = CompanyName;
      }

      if (description) {
        updateExpression += ", description = :description";
        expressionAttributeValues[":description"] = description;
      }

      if (website) {
        updateExpression += ", website = :website";
        expressionAttributeValues[":website"] = website;
      }

      if (location) {
        updateExpression += ", #loc = :location";
        expressionAttributeNames["#loc"] = "location";
        expressionAttributeValues[":location"] = location;
      }

      if (s3Response && s3Response.url) {
        updateExpression += ", logo = :logo";
        expressionAttributeValues[":logo"] = s3Response.url;
      }

      // Update company
      const updateResult = await docClient.update({
        TableName: "Companies_dev",
        Key: {
          companyId: companyId
        },
        UpdateExpression: updateExpression,
        ExpressionAttributeValues: expressionAttributeValues,
        ExpressionAttributeNames: expressionAttributeNames,
        ReturnValues: "ALL_NEW"
      });

      return res.status(200).json({
        message: "Company updated successfully",
        status: true,
        company: updateResult.Attributes
      });

    } catch (dbError) {
      console.error("Database operation error:", dbError);
      return res.status(500).json({
        error: "Database operation failed",
        details: dbError.message,
        status: false
      });
    }

  } catch (err) {
    console.error("Company update error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
      status: false
    });
  }
};

export const getCompaniesWithJobInfo = async (req, res) => {
  try {
    const companyParams = {
      TableName: "Companies_dev",
      Select: "ALL_ATTRIBUTES"
    };

    const companiesResult = await dynamoDB.scan(companyParams);

    if (!companiesResult.Items?.length) {
      return res.status(404).json({ status: false, message: 'No companies found' });
    }

    const jobParams = {
      TableName: "Jobs_dev",
      IndexName: "CompanyIndex",
      KeyConditionExpression: "companyId = :companyId"
    };

    const companiesWithJobs = await Promise.all(companiesResult.Items.map(async (company) => {
      jobParams.ExpressionAttributeValues = {
        ":companyId": company.companyId
      };
      const jobsResult = await dynamoDB.query(jobParams);
      return {
        ...company,
        jobCount: jobsResult.Items?.length || 0
      };
    }));

    return res.status(200).json({ status: true, companies: companiesWithJobs });

  } catch (error) {
    return res.status(500).json({ status: false, error: error.message });
  }
};








