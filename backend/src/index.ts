import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { AuthRoute } from './routes/auth';

dotenv.config({ path: path.join(__dirname, '../../.env') });
const app = express();
const PORT = process.env.BACKEND_PORT || 5000;
const MONGODB_URI = process.env.REACT_APP_MONGODB_URI || "";
const DB_NAME = process.env.DB_NAME;

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(AuthRoute);

// Connect to MongoDB
mongoose.connect(MONGODB_URI + DB_NAME)
  .then(() => {
    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
