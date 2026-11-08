import express from 'express';
import ReviewsController from '../controllers/ReviewController.js';
import validateReview from '../middlewares/validateReview.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import ownerMiddleware from '../middlewares/ownerMiddleware.js';

const router = express.Router();
const controller = new ReviewsController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', authMiddleware, validateReview, controller.create);
router.put('/:id', authMiddleware, ownerMiddleware, validateReview, controller.update);
router.delete('/:id', authMiddleware, ownerMiddleware, controller.delete);

export default router;