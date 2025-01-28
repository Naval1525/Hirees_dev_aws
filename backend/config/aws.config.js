import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

// Create DynamoDB client with region and credentials
const client = new DynamoDBClient({
  region: process.env.AWS_REGION || "us-east-1", // Default to 'us-east-1' if region is not provided
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

// Create a DynamoDB document client
const docClient = DynamoDBDocument.from(client);

// Export the document client and DynamoDB instance
export const dynamoDB = docClient;
export { docClient };
