import express from 'express';
import GenresController from '../controllers/GenreController.js';
import validateGenre from '../middlewares/validateGenre.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();
const controller = new GenresController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', authMiddleware, roleMiddleware, validateGenre, controller.create);
router.put('/:id', authMiddleware, roleMiddleware, validateGenre, controller.update);
router.delete('/:id', authMiddleware, roleMiddleware, controller.delete);

export default router;
