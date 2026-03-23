import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { IUser } from "../types/user.interface";
import config from "../config";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  {
    timestamps: true,
  },
);

// Pre-save middleware
userSchema.pre("save", async function () {
  const user = this;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) {
    return;
  }

  // Hash password using bcrypt salt rounds from config
  user.password = await bcrypt.hash(
    user.password as string,
    Number(config.bcrypt_salt_rounds),
  );

  
});

// Post-save middleware
userSchema.post("save", function (user) {
  console.log(
    `[Post-Save Hook]: A new user was created with email: ${user.email}`,
  );

  user.password = "";

 
});

export const User = model<IUser>("User", userSchema);
