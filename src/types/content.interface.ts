import { Types } from "mongoose";

export interface IContent {
  user: Types.ObjectId; 
  prompt: string;      
  generatedText: string;
  platform: 'facebook' | 'linkedin' | 'twitter' | 'instagram';
  status: 'draft' | 'published';
}