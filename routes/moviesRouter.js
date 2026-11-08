import { Router } from 'express';
import MoviesController from '../controllers/MovieController.js';
import validateMovie from '../middlewares/validateMovie.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = Router();
const controller = new MoviesController();

// filtros y búsqueda
router.get('/buscar/nombre', controller.searchByName);
router.get('/filtrar', controller.getFiltered);
router.get('/:mid/reviews', controller.getReviewsByMovie);

router.get('/', controller.getAll);
router.get('/:mid', controller.getById);
router.post('/', authMiddleware, roleMiddleware, validateMovie, controller.create);
router.put('/:mid', authMiddleware, roleMiddleware, validateMovie, controller.update);
router.delete('/:mid', authMiddleware, roleMiddleware, controller.delete);


export default router;




