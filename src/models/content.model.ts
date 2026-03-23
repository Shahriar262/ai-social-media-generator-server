import { model, Schema } from "mongoose";
import { IContent } from "../types/content.interface";

const contentSchema = new Schema<IContent>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User", 
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    generatedText: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      enum: ["facebook", "linkedin", "twitter", "instagram"],
      required: true,
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  {
    timestamps: true, 
  },
);

export const Content = model<IContent>('Content', contentSchema);
