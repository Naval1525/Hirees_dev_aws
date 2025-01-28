import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../config/s3Config.js";

export const uploadToS3 = async (file, folder = 'profiles') => {
  try {
    if (!file) return null;

    const timestamp = Date.now();
    const filename = `${folder}/${timestamp}-${file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: filename,
      Body: file.buffer,
      ContentType: file.mimetype,
    });

    await s3Client.send(command);

    return {
      url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${filename}`,
      key: filename
    };
  } catch (error) {
    console.error('S3 upload error:', error);
    throw error;
  }
};