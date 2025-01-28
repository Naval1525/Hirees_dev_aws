
import dynamoose from "dynamoose";

// Define the schema for the Application model
const applicationSchema = new dynamoose.Schema(
  {
    id: {
      type: String, // Primary key for the DynamoDB table
      hashKey: true, // Indicates this is the primary key
      required: true,
    },
    job: {
      type: String, // DynamoDB stores references as strings
      required: true,
    },
    applicant: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["pending", "accepted", "rejected"], // Valid status values
      default: "pending",
    },
    createdAt: {
      type: String, // Timestamps for tracking creation time
      default: () => new Date(),
    },
    updatedAt: {
      type: String, // Timestamps for tracking updates
      default: () => new Date(),
    },
  },

);

// Create and export the Application model
export const Application = dynamoose.model("Applications_dev", applicationSchema);
