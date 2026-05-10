import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  targetRole: {
    type: String,
    default: 'Frontend Developer',
  },
  readinessScore: {
    type: Number,
    default: 0,
  },
  problemsSolved: {
    type: Number,
    default: 0,
  },
  currentStreak: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
