import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  phone:{
    type: String,
    unique: [true, 'Phone already exists!'],
    required: [true, 'Phone is required!'],
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
  },
  isVerified:{
    type: Boolean,
    default: false,
  },
  isAdmin:{
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordExpires: Date,
  verifyToken: String,
  verifyTokenExpiry:Date,
  


  });
  

const User = models.users || model("users", userSchema);

export default User;