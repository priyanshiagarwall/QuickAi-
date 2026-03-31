import express from 'express';
import { requireAuth } from '@clerk/express';
import { generateArticle } from '../controllers/aiController.js';

const aiRouter = express.Router();

// ✅ correct auth usage
aiRouter.post('/generate-article', requireAuth(), generateArticle);

export default aiRouter;