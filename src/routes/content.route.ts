import express from 'express';
import { contentControllers } from '../controllers/content.controller';


const router = express.Router();
// Get all contents
router.get('/', contentControllers.getContents);
// Get single content
router.get('/:id', contentControllers.getContentById);
// Create content
router.post('/', contentControllers.createContent);
// Update content
router.put('/:id', contentControllers.updateContent);
// Delete content
router.delete('/:id', contentControllers.deleteContent);

export const ContentRoutes = router;