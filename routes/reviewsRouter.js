import express from 'express';
import ReviewsController from '../controllers/ReviewController.js';
import validateReview from '../middlewares/validateReview.js';

const router = express.Router();
const controller = new ReviewsController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
router.post('/', validateReview, controller.create);
router.put('/:id', validateReview, controller.update);
router.delete('/:id', controller.delete);

export default router;