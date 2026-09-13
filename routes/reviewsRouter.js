import express from 'express';
import ReviewsController from '../controllers/ReviewsController.js';

const router = express.Router();
const controller = new ReviewsController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;