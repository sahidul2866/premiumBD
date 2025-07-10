import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
      console.error('Missing required environment variables: MONGODB_URI or DB_NAME');
      process.exit(1);
    }

    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default connectDB;