import mongoose from "mongoose";

const choseRole = ['admin', 'user', 'stakeholder'];

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: choseRole,
    default: 'user' // Default role
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;
