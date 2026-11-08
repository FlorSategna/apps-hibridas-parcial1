import moviesRouter from './moviesRouter.js';
import genresRouter from './genresRouter.js';
import reviewsRouter from './reviewsRouter.js';
import usersRouter from './usersRouter.js';
import authRouter from './authRouter.js';

const routerAPI = (app) => {
  app.use('/api/peliculas', moviesRouter);
  app.use('/api/generos', genresRouter);
  app.use('/api/reviews', reviewsRouter);
  app.use('/api/usuarios', usersRouter);
  app.use('/api/auth',    authRouter);
}

export default routerAPI;