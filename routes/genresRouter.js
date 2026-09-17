import express from 'express';
import GenresController from '../controllers/GenreController.js';
import validateGenre from '../middlewares/validateGenre.js';

const router = express.Router();
const controller = new GenresController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validateGenre, controller.create);
router.put('/:id', validateGenre, controller.update);
router.delete('/:id', controller.delete);

export default router;
