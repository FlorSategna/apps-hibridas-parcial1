import express from 'express';
import GenresController from '../controllers/GenresController.js';

const router = express.Router();
const controller = new GenresController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

export default router;
