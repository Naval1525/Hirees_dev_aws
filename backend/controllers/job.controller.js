import { docClient, dynamoDB } from "../config/aws.config.js";
import { v4 as uuidv4 } from "uuid";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import nodemailer from 'nodemailer'
import { GetItemCommand,UpdateItemCommand } from "@aws-sdk/client-dynamodb";
const VALID_JOB_TYPES = ["Full-Time", "Part-Time", "Internship", "Freelance", "Contract","Contract to Hire"];


const TABLE_NAME = 'Jobs';
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

// Post a new job

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      location,
      jobType,
      experience,
      company,
      salary,
    } = req.body;

    const companyId = company || req.body.companyId;
    const userId = req.id;

    // Validation
    if (!title || !description || !requirements || !location || !jobType || !experience || !companyId) {
      return res.status(400).json({
        error: "All fields are required",
        status: false,
      });
    }

    // Validate job type
    const jobTypes = Array.isArray(jobType) ? jobType : [jobType];
    const areValidJobTypes = jobTypes.every(type => VALID_JOB_TYPES.includes(type));
    if (!areValidJobTypes) {
      return res.status(400).json({
        error: "Invalid job type",
        status: false,
      });
    }

    const jobId = uuidv4();
    const requirementsArray = requirements.split(",").map(req => req.trim());

    const job = {
      jobId,
      title,
      description,
      requirements: requirementsArray,
      location,
      jobType: jobTypes,
      experience,
      companyId,
      salary: salary || "",
      created_by: userId,
      applications: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await dynamoDB.put({
      TableName: "Jobs_dev",
      Item: job
    });

    return res.status(201).json({
      message: "Job posted successfully",
      status: true,
      job,
    });
  } catch (err) {
    console.error("Job posting error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};




// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const {
      keyword = "",
      location = "",
      timeRange = "",
      jobType = "",
      salary = ""
    } = req.query;

    console.log('Received filter criteria:', { keyword, location, timeRange, jobType, salary });

    // Build base filter expressions
    let filterExpressions = [];
    let expressionAttributeValues = {};
    let expressionAttributeNames = {};

    // Job type filter using "contains" for partial match (matching the AWS CLI behavior)
    if (jobType) {
      filterExpressions.push('contains(#jobType, :jobType)');
      expressionAttributeValues[':jobType'] = jobType;
      expressionAttributeNames['#jobType'] = 'jobType';
    }

    // Time range filter
    if (timeRange) {
      const now = new Date();
      let startDate;

      switch (timeRange) {
        case "today":
          startDate = new Date(now.setHours(0, 0, 0, 0));
          break;
        case "yesterday":
          startDate = new Date(now.setDate(now.getDate() - 1));
          startDate.setHours(0, 0, 0, 0);
          break;
        case "last3days":
          startDate = new Date(now.setDate(now.getDate() - 3));
          break;
        case "last7days":
          startDate = new Date(now.setDate(now.getDate() - 7));
          break;
        default:
          startDate = null;
      }

      if (startDate) {
        filterExpressions.push('#updatedAt >= :startDate');
        expressionAttributeValues[':startDate'] = startDate.toISOString();
        expressionAttributeNames['#updatedAt'] = 'updatedAt';
      }
    }

    // Build scan parameters
    const params = {
      TableName: "Jobs_dev",
      ...(filterExpressions.length > 0 && {
        FilterExpression: filterExpressions.join(' AND '),
        ExpressionAttributeValues: expressionAttributeValues,
        ExpressionAttributeNames: expressionAttributeNames
      })
    };

    console.log('DynamoDB Scan params:', JSON.stringify(params, null, 2));

    // Perform the scan operation
    const result = await docClient.scan(params);
    let jobs = result.Items;
    console.log(`Initial scan returned ${jobs.length} jobs`);

    // Apply additional filters that can't be done efficiently in DynamoDB
    if (keyword || salary || location) {
      jobs = jobs.filter(job => {
        let matches = true;
        const debugInfo = {};

        // Keyword search (title, description)
        if (keyword) {
          const titleMatch = job.title.toLowerCase().includes(keyword.toLowerCase());
          const descMatch = job.description.toLowerCase().includes(keyword.toLowerCase());
          matches = matches && (titleMatch || descMatch);
          debugInfo.keyword = { titleMatch, descMatch };
        }

        // Salary filter
        if (salary && matches) {
          const jobSalary = parseInt(job.salary); // Ensure job salary is a number
          const [min, max] = salary.split("-").map(Number);
          debugInfo.salary = { jobSalary, min: min * 1000, max: max ? max * 1000 : null };

          if (max) {
            matches = matches && (jobSalary >= min * 1000 && jobSalary <= max * 1000);
          } else {
            matches = matches && (jobSalary >= min * 1000);
          }
        }

        // Location filter (case insensitive)
        if (location && matches) {
          matches = matches && job.location.toLowerCase().includes(location.toLowerCase());
          debugInfo.location = job.location;
        }

        // Log debug info for filtered out jobs
        if (!matches) {
          console.log(`Job filtered out:`, {
            jobId: job.jobId,
            title: job.title,
            filterResults: debugInfo
          });
        }

        return matches;
      });
    }

    console.log(`After all filters: ${jobs.length} jobs remaining`);

    // Sort by updatedAt in descending order
    jobs.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    // Fetch company details for each job
    const jobsWithCompany = await Promise.all(jobs.map(async (job) => {
      try {
        const companyResult = await dynamoDB.get({
          TableName: "Companies_dev",
          Key: { companyId: job.companyId }
        });

        return {
          ...job,
          company: companyResult.Item
        };
      } catch (error) {
        console.error(`Error fetching company details for job ${job.jobId}:`, error);
        return {
          ...job,
          company: null
        };
      }
    }));

    // Return the final response
    if (!jobs.length) {
      return res.status(200).json({
        status: true,
        jobs: [],
        message: "No jobs found matching the criteria"
      });
    }

    return res.status(200).json({
      status: true,
      jobs: jobsWithCompany,
    });

  } catch (err) {
    console.error("Get jobs error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};

// export const getAllJobs = async (req, res) => {
//   try {
//     const {
//       keyword = "",
//       location = "",
//       timeRange = "",
//       jobType = "",
//       salary = ""
//     } = req.query;

//     console.log('Received filter criteria:', { keyword, location, timeRange, jobType, salary });

//     // Build base filter expressions
//     let filterExpressions = [];
//     let expressionAttributeValues = {};
//     let expressionAttributeNames = {};

//     // Location filter (updated from previous code)
//     if (location) {
//       filterExpressions.push('contains(#location, :location)');
//       expressionAttributeValues[':location'] = location.toLowerCase(); // Ensure consistent case handling
//       expressionAttributeNames['#location'] = 'location';
//     }

//     // Job type filter using "contains" for partial match (matching the AWS CLI behavior)
//     if (jobType) {
//       filterExpressions.push('contains(#jobType, :jobType)'); // Use contains instead of =
//       expressionAttributeValues[':jobType'] = jobType; // Use the full jobType value for partial matching
//       expressionAttributeNames['#jobType'] = 'jobType';
//     }

//     // Time range filter
//     if (timeRange) {
//       const now = new Date();
//       let startDate;

//       switch (timeRange) {
//         case "today":
//           startDate = new Date(now.setHours(0, 0, 0, 0));
//           break;
//         case "yesterday":
//           startDate = new Date(now.setDate(now.getDate() - 1));
//           startDate.setHours(0, 0, 0, 0);
//           break;
//         case "last3days":
//           startDate = new Date(now.setDate(now.getDate() - 3));
//           break;
//         case "last7days":
//           startDate = new Date(now.setDate(now.getDate() - 7));
//           break;
//         default:
//           startDate = null;
//       }

//       if (startDate) {
//         filterExpressions.push('#updatedAt >= :startDate');
//         expressionAttributeValues[':startDate'] = startDate.toISOString();
//         expressionAttributeNames['#updatedAt'] = 'updatedAt';
//       }
//     }

//     // Build scan parameters
//     const params = {
//       TableName: "Jobs_dev",
//       ...(filterExpressions.length > 0 && {
//         FilterExpression: filterExpressions.join(' AND '),
//         ExpressionAttributeValues: expressionAttributeValues,
//         ExpressionAttributeNames: expressionAttributeNames
//       })
//     };

//     console.log('DynamoDB Scan params:', JSON.stringify(params, null, 2));

//     // Perform the scan operation
//     const result = await docClient.scan(params);
//     let jobs = result.Items;
//     console.log(`Initial scan returned ${jobs.length} jobs`);

//     // Apply additional filters that can't be done efficiently in DynamoDB
//     if (keyword || salary) {
//       jobs = jobs.filter(job => {
//         let matches = true;
//         const debugInfo = {};

//         // Keyword search (title, description)
//         if (keyword) {
//           const titleMatch = job.title.toLowerCase().includes(keyword.toLowerCase());
//           const descMatch = job.description.toLowerCase().includes(keyword.toLowerCase());
//           matches = matches && (titleMatch || descMatch);
//           debugInfo.keyword = { titleMatch, descMatch };
//         }

//         // Salary filter
//         if (salary && matches) {
//           const jobSalary = parseInt(job.salary); // Ensure job salary is a number
//           const [min, max] = salary.split("-").map(Number);
//           debugInfo.salary = { jobSalary, min: min * 1000, max: max ? max * 1000 : null };

//           if (max) {
//             matches = matches && (jobSalary >= min * 1000 && jobSalary <= max * 1000);
//           } else {
//             matches = matches && (jobSalary >= min * 1000);
//           }
//         }

//         // Log debug info for filtered out jobs
//         if (!matches) {
//           console.log(`Job filtered out:`, {
//             jobId: job.jobId,
//             title: job.title,
//             filterResults: debugInfo
//           });
//         }

//         return matches;
//       });
//     }

//     console.log(`After all filters: ${jobs.length} jobs remaining`);

//     // Sort by updatedAt in descending order
//     jobs.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

//     // Fetch company details for each job
//     const jobsWithCompany = await Promise.all(jobs.map(async (job) => {
//       try {
//         const companyResult = await dynamoDB.get({
//           TableName: "Companies_dev",
//           Key: { companyId: job.companyId }
//         });

//         return {
//           ...job,
//           company: companyResult.Item
//         };
//       } catch (error) {
//         console.error(`Error fetching company details for job ${job.jobId}:`, error);
//         return {
//           ...job,
//           company: null
//         };
//       }
//     }));

//     // Return the final response
//     if (!jobs.length) {
//       return res.status(200).json({
//         status: true,
//         jobs: [],
//         message: "No jobs found matching the criteria"
//       });
//     }

//     return res.status(200).json({
//       status: true,
//       jobs: jobsWithCompany,
//     });

//   } catch (err) {
//     console.error("Get jobs error:", err);
//     return res.status(500).json({
//       error: "Internal server error",
//       details: err.message,
//     });
//   }
// };

// export const getAllJobs = async (req, res) => {
//   try {
//     const {
//       keyword = "",
//       location = "",
//       timeRange = "",
//       jobType = "",
//       salary = ""
//     } = req.query;

//     console.log('Received filter criteria:', { keyword, location, timeRange, jobType, salary });

//     // Build base filter expressions
//     let filterExpressions = [];
//     let expressionAttributeValues = {};
//     let expressionAttributeNames = {};

//     // Location filter
//     if (location) {
//       filterExpressions.push('contains(#location, :location)');
//       expressionAttributeValues[':location'] = location.toLowerCase(); // Ensure consistent case handling
//       expressionAttributeNames['#location'] = 'location';
//     }


//     // Job type filter using "contains" for partial match (matching the AWS CLI behavior)
//     if (jobType) {
//       filterExpressions.push('contains(#jobType, :jobType)'); // Use contains instead of =
//       expressionAttributeValues[':jobType'] = jobType; // Use the full jobType value for partial matching
//       expressionAttributeNames['#jobType'] = 'jobType';
//     }

//     // Time range filter
//     if (timeRange) {
//       const now = new Date();
//       let startDate;

//       switch (timeRange) {
//         case "today":
//           startDate = new Date(now.setHours(0, 0, 0, 0));
//           break;
//         case "yesterday":
//           startDate = new Date(now.setDate(now.getDate() - 1));
//           startDate.setHours(0, 0, 0, 0);
//           break;
//         case "last3days":
//           startDate = new Date(now.setDate(now.getDate() - 3));
//           break;
//         case "last7days":
//           startDate = new Date(now.setDate(now.getDate() - 7));
//           break;
//         default:
//           startDate = null;
//       }

//       if (startDate) {
//         filterExpressions.push('#updatedAt >= :startDate');
//         expressionAttributeValues[':startDate'] = startDate.toISOString();
//         expressionAttributeNames['#updatedAt'] = 'updatedAt';
//       }
//     }

//     // Build scan parameters
//     const params = {
//       TableName: "Jobs_dev",
//       ...(filterExpressions.length > 0 && {
//         FilterExpression: filterExpressions.join(' AND '),
//         ExpressionAttributeValues: expressionAttributeValues,
//         ExpressionAttributeNames: expressionAttributeNames
//       })
//     };

//     console.log('DynamoDB Scan params:', JSON.stringify(params, null, 2));

//     // Perform the scan operation
//     const result = await docClient.scan(params);
//     let jobs = result.Items;
//     console.log(`Initial scan returned ${jobs.length} jobs`);

//     // Apply additional filters that can't be done efficiently in DynamoDB
//     if (keyword || salary) {
//       jobs = jobs.filter(job => {
//         let matches = true;
//         const debugInfo = {};

//         // Keyword search (title, description)
//         if (keyword) {
//           const titleMatch = job.title.toLowerCase().includes(keyword.toLowerCase());
//           const descMatch = job.description.toLowerCase().includes(keyword.toLowerCase());
//           matches = matches && (titleMatch || descMatch);
//           debugInfo.keyword = { titleMatch, descMatch };
//         }

//         // Salary filter
//         if (salary && matches) {
//           const jobSalary = parseInt(job.salary); // Ensure job salary is a number
//           const [min, max] = salary.split("-").map(Number);
//           debugInfo.salary = { jobSalary, min: min * 1000, max: max ? max * 1000 : null };

//           if (max) {
//             matches = matches && (jobSalary >= min * 1000 && jobSalary <= max * 1000);
//           } else {
//             matches = matches && (jobSalary >= min * 1000);
//           }
//         }

//         // Log debug info for filtered out jobs
//         if (!matches) {
//           console.log(`Job filtered out:`, {
//             jobId: job.jobId,
//             title: job.title,
//             filterResults: debugInfo
//           });
//         }

//         return matches;
//       });
//     }

//     console.log(`After all filters: ${jobs.length} jobs remaining`);

//     // Sort by updatedAt in descending order
//     jobs.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

//     // Fetch company details for each job
//     const jobsWithCompany = await Promise.all(jobs.map(async (job) => {
//       try {
//         const companyResult = await dynamoDB.get({
//           TableName: "Companies_dev",
//           Key: { companyId: job.companyId }
//         });

//         return {
//           ...job,
//           company: companyResult.Item
//         };
//       } catch (error) {
//         console.error(`Error fetching company details for job ${job.jobId}:`, error);
//         return {
//           ...job,
//           company: null
//         };
//       }
//     }));

//     // Return the final response
//     if (!jobs.length) {
//       return res.status(200).json({
//         status: true,
//         jobs: [],
//         message: "No jobs found matching the criteria"
//       });
//     }

//     return res.status(200).json({
//       status: true,
//       jobs: jobsWithCompany,
//     });

//   } catch (err) {
//     console.error("Get jobs error:", err);
//     return res.status(500).json({
//       error: "Internal server error",
//       details: err.message,
//     });
//   }
// };

// export const getAllJobs = async (req, res) => {
//   try {
//     const {
//       keyword = "",
//       location = "",
//       timeRange = "",
//       jobType = "",
//       salary = ""
//     } = req.query;

//     console.log('Received filter criteria:', { keyword, location, timeRange, jobType, salary });

//     // Build base filter expressions
//     let filterExpressions = [];
//     let expressionAttributeValues = {};
//     let expressionAttributeNames = {};

//     // Location filter
//     if (location) {
//       filterExpressions.push('contains(#location, :location)');
//       expressionAttributeValues[':location'] = location.toLowerCase();  // Ensure location is lowercase
//       expressionAttributeNames['#location'] = 'location';
//     }

//     // Job type filter
//     if (jobType) {
//       filterExpressions.push('#jobType = :jobType');
//       expressionAttributeValues[':jobType'] = jobType;
//       expressionAttributeNames['#jobType'] = 'jobType';
//     }

//     // Time range filter
//     if (timeRange) {
//       const now = new Date();
//       let startDate;

//       switch (timeRange) {
//         case "today":
//           startDate = new Date(now.setHours(0, 0, 0, 0));
//           break;
//         case "yesterday":
//           startDate = new Date(now.setDate(now.getDate() - 1));
//           startDate.setHours(0, 0, 0, 0);
//           break;
//         case "last3days":
//           startDate = new Date(now.setDate(now.getDate() - 3));
//           break;
//         case "last7days":
//           startDate = new Date(now.setDate(now.getDate() - 7));
//           break;
//         default:
//           startDate = null;
//       }

//       if (startDate) {
//         filterExpressions.push('#updatedAt >= :startDate');
//         expressionAttributeValues[':startDate'] = startDate.toISOString();
//         expressionAttributeNames['#updatedAt'] = 'updatedAt';
//       }
//     }

//     // Build scan parameters
//     const params = {
//       TableName: "Jobs_dev",
//       ...(filterExpressions.length > 0 && {
//         FilterExpression: filterExpressions.join(' AND '),
//         ExpressionAttributeValues: expressionAttributeValues,
//         ExpressionAttributeNames: expressionAttributeNames
//       })
//     };

//     console.log('DynamoDB Scan params:', JSON.stringify(params, null, 2));

//     // Perform the scan operation
//     const result = await docClient.scan(params);
//     let jobs = result.Items;
//     console.log(`Initial scan returned ${jobs.length} jobs`);

//     // Apply additional filters that can't be done efficiently in DynamoDB
//     if (keyword || salary) {
//       jobs = jobs.filter(job => {
//         let matches = true;
//         const debugInfo = {};

//         // Keyword search (title, description)
//         if (keyword) {
//           const titleMatch = job.title.toLowerCase().includes(keyword.toLowerCase());
//           const descMatch = job.description.toLowerCase().includes(keyword.toLowerCase());
//           matches = matches && (titleMatch || descMatch);
//           debugInfo.keyword = { titleMatch, descMatch };
//         }

//         // Salary filter
//         if (salary && matches) {
//           const jobSalary = parseInt(job.salary); // Ensure job salary is a number
//           const [min, max] = salary.split("-").map(Number);
//           debugInfo.salary = { jobSalary, min: min * 1000, max: max ? max * 1000 : null };

//           if (max) {
//             matches = matches && (jobSalary >= min * 1000 && jobSalary <= max * 1000);
//           } else {
//             matches = matches && (jobSalary >= min * 1000);
//           }
//         }

//         // Log debug info for filtered out jobs
//         if (!matches) {
//           console.log(`Job filtered out:`, {
//             jobId: job.jobId,
//             title: job.title,
//             filterResults: debugInfo
//           });
//         }

//         return matches;
//       });
//     }

//     console.log(`After all filters: ${jobs.length} jobs remaining`);

//     // Sort by updatedAt in descending order
//     jobs.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

//     // Fetch company details for each job
//     const jobsWithCompany = await Promise.all(jobs.map(async (job) => {
//       try {
//         const companyResult = await dynamoDB.get({
//           TableName: "Companies_dev",
//           Key: { companyId: job.companyId }
//         });

//         return {
//           ...job,
//           company: companyResult.Item
//         };
//       } catch (error) {
//         console.error(`Error fetching company details for job ${job.jobId}:`, error);
//         return {
//           ...job,
//           company: null
//         };
//       }
//     }));

//     // Return the final response
//     if (!jobs.length) {
//       return res.status(200).json({
//         status: true,
//         jobs: [],
//         message: "No jobs found matching the criteria"
//       });
//     }

//     return res.status(200).json({
//       status: true,
//       jobs: jobsWithCompany,
//     });

//   } catch (err) {
//     console.error("Get jobs error:", err);
//     return res.status(500).json({
//       error: "Internal server error",
//       details: err.message,
//     });
//   }
// };

// export const getAllJobs = async (req, res) => {
//   try {
//       const {
//           keyword = "",
//           location = "",
//           timeRange = "",
//           jobType = "",
//           salary = ""
//       } = req.query;

//       console.log('Received filter criteria:', { keyword, location, timeRange, jobType, salary });

//       // Build base filter expressions
//       let filterExpressions = [];
//       let expressionAttributeValues = {};
//       let expressionAttributeNames = {};

//       // Location filter
//       if (location) {
//           filterExpressions.push('contains(#location, :location)');
//           expressionAttributeValues[':location'] = location.toLowerCase();
//           expressionAttributeNames['#location'] = 'location';
//       }

//       // Job type filter
//       if (jobType) {
//           filterExpressions.push('#jobType = :jobType');
//           expressionAttributeValues[':jobType'] = jobType;
//           expressionAttributeNames['#jobType'] = 'jobType';
//       }

//       // Time range filter
//       if (timeRange) {
//           const now = new Date();
//           let startDate;

//           switch (timeRange) {
//               case "today":
//                   startDate = new Date(now.setHours(0, 0, 0, 0));
//                   break;
//               case "yesterday":
//                   startDate = new Date(now.setDate(now.getDate() - 1));
//                   startDate.setHours(0, 0, 0, 0);
//                   break;
//               case "last3days":
//                   startDate = new Date(now.setDate(now.getDate() - 3));
//                   break;
//               case "last7days":
//                   startDate = new Date(now.setDate(now.getDate() - 7));
//                   break;
//               default:
//                   startDate = null;
//           }

//           if (startDate) {
//               filterExpressions.push('#updatedAt >= :startDate');
//               expressionAttributeValues[':startDate'] = startDate.toISOString();
//               expressionAttributeNames['#updatedAt'] = 'updatedAt';
//           }
//       }

//       // Build scan parameters
//       const params = {
//           TableName: "Jobs_dev",
//           ...(filterExpressions.length > 0 && {
//               FilterExpression: filterExpressions.join(' AND '),
//               ExpressionAttributeValues: expressionAttributeValues,
//               ExpressionAttributeNames: expressionAttributeNames
//           })
//       };

//       console.log('DynamoDB Scan params:', JSON.stringify(params, null, 2));

//       // Perform the scan operation
//       const result = await dynamoDB.scan(params);
//       let jobs = result.Items;
//       console.log(`Initial scan returned ${jobs.length} jobs`);

//       // Apply additional filters that can't be done efficiently in DynamoDB
//       if (keyword || salary) {
//           jobs = jobs.filter(job => {
//               let matches = true;
//               const debugInfo = {};

//               // Keyword search (title, description)
//               if (keyword) {
//                   const titleMatch = job.title.toLowerCase().includes(keyword.toLowerCase());
//                   const descMatch = job.description.toLowerCase().includes(keyword.toLowerCase());
//                   matches = matches && (titleMatch || descMatch);
//                   debugInfo.keyword = { titleMatch, descMatch };
//               }

//               // Salary filter
//               if (salary && matches) {
//                   const jobSalary = parseInt(job.salary);
//                   const [min, max] = salary.split("-").map(Number);
//                   debugInfo.salary = { jobSalary, min: min * 1000, max: max ? max * 1000 : null };

//                   if (max) {
//                       matches = matches && (jobSalary >= min * 1000 && jobSalary <= max * 1000);
//                   } else {
//                       matches = matches && (jobSalary >= min * 1000);
//                   }
//               }

//               // Log debug info for filtered out jobs
//               if (!matches) {
//                   console.log(`Job filtered out:`, {
//                       jobId: job.jobId,
//                       title: job.title,
//                       filterResults: debugInfo
//                   });
//               }

//               return matches;
//           });
//       }

//       console.log(`After all filters: ${jobs.length} jobs remaining`);

//       // Sort by updatedAt in descending order
//       jobs.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

//       // Fetch company details for each job
//       const jobsWithCompany = await Promise.all(jobs.map(async (job) => {
//           try {
//               const companyResult = await dynamoDB.get({
//                   TableName: "Companies_dev",
//                   Key: { companyId: job.companyId }
//               });

//               return {
//                   ...job,
//                   company: companyResult.Item
//               };
//           } catch (error) {
//               console.error(`Error fetching company details for job ${job.jobId}:`, error);
//               return {
//                   ...job,
//                   company: null
//               };
//           }
//       }));

//       // Return the final response
//       if (!jobs.length) {
//           return res.status(200).json({
//               status: true,
//               jobs: [],
//               message: "No jobs found matching the criteria"
//           });
//       }

//       return res.status(200).json({
//           status: true,
//           jobs: jobsWithCompany,
//       });

//   } catch (err) {
//       console.error("Get jobs error:", err);
//       return res.status(500).json({
//           error: "Internal server error",
//           details: err.message,
//       });
//   }
// };





// export const getAllJobs = async (req, res) => {
//   try {
//       const {
//           keyword = "",
//           location = "",
//           timeRange = "",
//           jobType = "",
//           salary = ""
//       } = req.query;

//       // Base scan parameters
//       const params = {
//           TableName: ""Jobs_dev"",
//       };

//       const result = await dynamoDB.scan(params);
//       let jobs = result.Items;

//       // Apply filters
//       jobs = jobs.filter(job => {
//           let matches = true;

//           // Keyword search (title, description)
//           if (keyword) {
//               matches = matches && (
//                   job.title.toLowerCase().includes(keyword.toLowerCase()) ||
//                   job.description.toLowerCase().includes(keyword.toLowerCase())
//               );
//           }

//           // Location search
//           if (location) {
//               matches = matches && job.location.toLowerCase().includes(location.toLowerCase());
//           }

//           // Time range filter
//           if (timeRange) {
//               const now = new Date();
//               const jobDate = new Date(job.createdAt);
//               const daysDiff = (now - jobDate) / (1000 * 60 * 60 * 24);

//               switch (timeRange) {
//                   case "today": matches = matches && (daysDiff < 1); break;
//                   case "yesterday": matches = matches && (daysDiff >= 1 && daysDiff < 2); break;
//                   case "last3days": matches = matches && (daysDiff < 3); break;
//                   case "last7days": matches = matches && (daysDiff < 7); break;
//               }
//           }

//           // Job type filter
//           if (jobType) {
//               matches = matches && job.jobType === jobType;
//           }

//           // Salary range filter
//           if (salary) {
//               const jobSalary = parseInt(job.salary);
//               const [min, max] = salary.split("-").map(Number);

//               if (max) {
//                   matches = matches && (jobSalary >= min * 1000 && jobSalary <= max * 1000);
//               } else {
//                   matches = matches && (jobSalary >= min * 1000);
//               }
//           }

//           return matches;
//       });

//       // Sort by createdAt in descending order
//       jobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

//       // Fetch company details for each job
//       const jobsWithCompany = await Promise.all(jobs.map(async (job) => {
//           const companyResult = await dynamoDB.get({
//               TableName: "Companies_dev",
//               Key: { companyId: job.companyId }
//           });

//           return {
//               ...job,
//               company: companyResult.Item
//           };
//       }));

//       if (!jobs.length) {
//           return res.status(200).json({  // Changed from 400 to 200 as empty results aren't an error
//               status: true,
//               jobs: [],
//               message: "No jobs found matching the criteria"
//           });
//       }

//       return res.status(200).json({
//           status: true,
//           jobs: jobsWithCompany,
//       });
//   } catch (err) {
//       console.error("Get jobs error:", err);
//       return res.status(500).json({
//           error: "Internal server error",
//           details: err.message,
//       });
//   }
// };




// Get job by ID

export const getJobById = async (req, res) => {
  try {

    const jobId = req.params.id;
    console.log(req.params);  // Check if the jobId exists

console.log(jobId);
    const result = await dynamoDB.get({
      TableName: "Jobs_dev",
      Key: { jobId }
    });

    if (!result.Item) {
      return res.status(404).json({
        error: "Job not found",
        status: false,
      });
    }

    // Fetch applications if they exist
    const job = result.Item;
    if (job.applications && job.applications.length > 0) {
      const applications = await Promise.all(job.applications.map(async (applicationId) => {
        const appResult = await dynamoDB.get({
          TableName: "Applications",
          Key: { applicationId }
        });
        return appResult.Item;
      }));
      job.applications = applications.filter(app => app !== null);
    }

    return res.status(200).json({
      status: true,
      job,
    });
  } catch (err) {
    console.error("Get job by id error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};




// Get jobs by company ID

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;

    const params = {
      TableName: "Jobs_dev",
      IndexName: "CreatedByIndex",
      KeyConditionExpression: "created_by = :adminId",
      ExpressionAttributeValues: {
        ":adminId": adminId
      }
    };

    const result = await dynamoDB.query(params);

    if (!result.Items.length) {
      return res.status(400).json({
        error: "Jobs not found",
        status: false,
      });
    }

    // Fetch company details for each job
    const jobs = await Promise.all(result.Items.map(async (job) => {
      const companyResult = await dynamoDB.get({
        TableName: "Companies_dev",
        Key: { companyId: job.companyId }
      });

      return {
        ...job,
        company: companyResult.Item
      };
    }));

    // Sort by createdAt in descending order
    jobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return res.status(200).json({
      status: true,
      jobs,
    });
  } catch (err) {
    console.error("Get admin jobs error:", err);
    return res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
};



export const updateJob = async (req, res) => {
  const { jobId } = req.params;
  const updates = req.body;

  try {
    if (!jobId) {
      return res.status(400).json({ error: 'Job ID is required' });
    }

    // Check if job exists
    const getParams = {
      TableName: TABLE_NAME,
      Key: marshall({ jobId })
    };

    const existingJob = await dynamoDB.send(new GetItemCommand(getParams));

    if (!existingJob.Item) {
      return res.status(404).json({ error: 'Job not found' });
    }

    // Prepare update parameters
    const allowedFields = [
      'title',
      'description',
      'requirements',
      'salary',
      'experience',
      'location',
      'jobType'
    ];

    let updateExpression = 'SET ';
    const expressionAttributeNames = {};
    const expressionAttributeValues = {};

    allowedFields.forEach(field => {
      if (updates[field] !== undefined) {
        updateExpression += `#${field} = :${field}, `;
        expressionAttributeNames[`#${field}`] = field;
        expressionAttributeValues[`:${field}`] = updates[field];
      }
    });

    // Add updatedAt
    updateExpression += '#updatedAt = :updatedAt';
    expressionAttributeNames['#updatedAt'] = 'updatedAt';
    expressionAttributeValues[':updatedAt'] = new Date().toISOString();

    const updateParams = {
      TableName: TABLE_NAME,
      Key: marshall({ jobId }),
      UpdateExpression: updateExpression,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: marshall(expressionAttributeValues),
      ReturnValues: 'ALL_NEW'
    };

    const result = await dynamoDB.send(new UpdateItemCommand(updateParams));

    // Return the updated job
    res.status(200).json({
      message: 'Job updated successfully',
      job: result.Attributes ? unmarshall(result.Attributes) : null
    });

  } catch (error) {
    console.error('Error updating job:', error);
    res.status(500).json({
      error: 'Failed to update job',
      details: error.message
    });
  }
};








export const getCompanyJobs = async (req, res) => {
  try {
    const { id } = req.params;

    const params = {
      TableName: "Jobs_dev",
      IndexName: "CompanyIndex",
      KeyConditionExpression: "companyId = :companyId",
      ExpressionAttributeValues: {
        ":companyId": id
      }
    };

    const response = await dynamoDB.query(params);

    res.status(200).json({
      success: true,
      data: response.Items
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch jobs',
      details: error.message
    });
  }
};

// export const getJobsByCompanyId = async (companyId) => {
//   try {
//     const params = {
//       TableName: "Jobs_dev",
//       IndexName: "CompanyIndex",
//       KeyConditionExpression: "companyId = :companyId",
//       ExpressionAttributeValues: {
//         ":companyId": companyId
//       }
//     };

//     const response = await dynamoDB.query(params);

//     return {
//       success: true,
//       data: response.Items
//     };

//   } catch (error) {
//     console.error('Error fetching jobs:', error);
//     return {
//       success: false,
//       error: 'Failed to fetch jobs',
//       details: error.message
//     };
//   }
// };