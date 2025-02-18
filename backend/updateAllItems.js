import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// AWS Configuration from environment variables
const awsConfig = {
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
};

async function updateAllItems() {
    try {
        // Validate environment variables
        if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.AWS_REGION) {
            throw new Error('Missing required AWS credentials in environment variables');
        }

        // Initialize DynamoDB client
        const dynamodb = DynamoDBDocument.from(new DynamoDB(awsConfig));

        console.log('Starting to scan items...');
        const scanParams = {
            TableName: 'Jobs_dev'
        };

        const scanResult = await dynamodb.scan(scanParams);
        console.log(`Found ${scanResult.Items.length} items to update`);

        let successCount = 0;
        for (const item of scanResult.Items) {
            try {
                const updateParams = {
                    TableName: 'Jobs_dev',
                    Key: {
                        jobId: item.jobId
                    },
                    UpdateExpression: 'SET hiringTeam = :emptyTeam',
                    ExpressionAttributeValues: {
                        ':emptyTeam': '[]'
                    }
                };

                await dynamodb.update(updateParams);
                successCount++;
                console.log(`Updated item with jobId: ${item.jobId} (${successCount}/${scanResult.Items.length})`);
            } catch (updateError) {
                console.error(`Failed to update item ${item.jobId}:`, updateError);
            }
        }

        console.log(`Update completed. Successfully updated ${successCount} items`);
    } catch (error) {
        console.error('Error:', error);
    }
}

updateAllItems();