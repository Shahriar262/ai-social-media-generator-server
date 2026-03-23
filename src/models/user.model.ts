import { Schema, model } from "mongoose";
import { IUser } from "../types/user.interface";

const userSchema = new Schema<IUser>(
  {
    name: { 
      type: String, 
      required: [true, 'Name is required'] 
    },
    email: { 
      type: String, 
      required: [true, 'Email is required'], 
      unique: true 
    },
    password: { 
      type: String, 
      required: [true, 'Password is required'],
      select: false 
    },
    role: { 
      type: String, 
      enum: ['user', 'admin'], 
      default: 'user' 
    },
  },
  {
    timestamps: true, 
  }
);

export const User = model<IUser>('User', userSchema);