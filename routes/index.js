import moviesRouter from './moviesRouter.js';
import genresRouter from './genresRouter.js';
import reviewsRouter from './reviewsRouter.js';

const routerAPI = (app) => {
  app.use('/api/movies', moviesRouter);
  app.use('/api/genres', genresRouter);
  app.use('/api/reviews', reviewsRouter);
}

export default routerAPI;