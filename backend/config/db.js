import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Mongo connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDb;
