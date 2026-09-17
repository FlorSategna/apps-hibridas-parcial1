import { Router } from 'express';
import MoviesController from '../controllers/MovieController.js';
import validateMovie from '../middlewares/validateMovie.js';

const router = Router();
const controller = new MoviesController();

// filtros y búsqueda
router.get('/buscar/nombre', controller.searchByName);
router.get('/filtrar', controller.getFiltered);
router.get('/:mid/reviews', controller.getReviewsByMovie);

router.get('/', controller.getAll);
router.get('/:mid', controller.getById);
router.post('/', validateMovie, controller.create);
router.put('/:mid', validateMovie, controller.update);
router.delete('/:mid', controller.delete);

export default router;




