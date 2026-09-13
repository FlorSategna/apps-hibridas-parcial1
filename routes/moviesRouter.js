import express from 'express';
import MoviesController from '../controllers/MoviesController.js';

const router = express.Router();

const controller = new MoviesController();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

// filtros y búsqueda
router.get('/buscar/nombre', controller.getByName);
router.get('/filtrar/genero', controller.getByGenero);

export default router;




