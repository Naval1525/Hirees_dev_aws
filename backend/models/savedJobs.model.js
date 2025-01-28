import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

// Initialize the base DynamoDB client for table operations
const client = new DynamoDB({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Create DynamoDB Document client for data operations
export const dynamoDB = DynamoDBDocument.from(client);

// Define the SavedJobs table model
export const SavedJobsTable = {
  TableName: "SavedJobs_dev",
  KeySchema: [
    { AttributeName: "savedJobId", KeyType: "HASH" }, // Partition key
  ],
  AttributeDefinitions: [
    { AttributeName: "savedJobId", AttributeType: "S" },
    { AttributeName: "userId", AttributeType: "S" },
    { AttributeName: "jobId", AttributeType: "S" },
    { AttributeName: "createdAt", AttributeType: "S" },
  ],
  GlobalSecondaryIndexes: [
    {
      IndexName: "UserIndex",
      KeySchema: [
        { AttributeName: "userId", KeyType: "HASH" },
        { AttributeName: "createdAt", KeyType: "RANGE" }
      ],
      Projection: {
        ProjectionType: "ALL"
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
      }
    },
    {
      IndexName: "JobIndex",
      KeySchema: [
        { AttributeName: "jobId", KeyType: "HASH" }
      ],
      Projection: {
        ProjectionType: "ALL"
      },
      ProvisionedThroughput: {
        ReadCapacityUnits: 5,
        WriteCapacityUnits: 5
      }
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5
  }
};

// Helper function to create the SavedJobs table
export const createSavedJobsTable = async () => {
  try {
    await client.createTable(SavedJobsTable);
    console.log("SavedJobs table created successfully");
  } catch (error) {
    if (error.name === "ResourceInUseException") {
      console.log("SavedJobs table already exists");
    } else {
      console.error("Error creating SavedJobs table:", error);
      throw error;
    }
  }
};