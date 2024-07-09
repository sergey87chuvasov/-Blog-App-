import mongoose from 'mongoose';

export const ConnectDB = async () => {
  await mongoose.connect(
    'mongodb+srv://sergetechno:stereox87@cluster0.jbzffuj.mongodb.net/blog-app'
  );
  console.log('DB CONNECTED');
};
