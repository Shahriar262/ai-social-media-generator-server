import { Request, Response } from 'express';
import { Content } from '../models/content.model';


// Create content
 const createContent = async (req: Request, res: Response) => {
  try {
    const savedContent = await Content.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Content created successfully',
      data: savedContent,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to create content',
      error: err.message,
    });
  }
};

// Get all contents
 const getContents = async (req: Request, res: Response) => {
  try {
    const contents = await Content.find();
    res.status(200).json({
      success: true,
      message: 'Contents fetched successfully',
      data: contents,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contents',
      error: err.message,
    });
  }
};

// Get single content
 const getContentById = async (req: Request, res: Response) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({
        success: false,
        message: 'Content not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Content fetched successfully',
      data: content,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch content',
      error: err.message,
    });
  }
};

// Update content
 const updateContent = async (req: Request, res: Response) => {
  try {
    const updatedContent = await Content.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedContent) {
      return res.status(404).json({
        success: false,
        message: 'Content not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Content updated successfully',
      data: updatedContent,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to update content',
      error: err.message,
    });
  }
};

// Delete content
 const deleteContent = async (req: Request, res: Response) => {
  try {
    const deletedContent = await Content.findByIdAndDelete(req.params.id);
    if (!deletedContent) {
      return res.status(404).json({
        success: false,
        message: 'Content not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Content deleted successfully',
      data: null,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete content',
      error: err.message,
    });
  }
};

export const contentControllers = {
    createContent,
    getContents,
    getContentById,
    updateContent,
    deleteContent,
}