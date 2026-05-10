import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
// For local development, if MongoDB is not installed, we can fall back to an in-memory or throw a warning
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ai-ecosystem';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('MongoDB connection error. Please make sure MongoDB is running.');
    console.error(err);
  });

// Routes
app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
