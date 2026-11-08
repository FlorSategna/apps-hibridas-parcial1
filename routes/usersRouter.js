import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

import { 
    getUsers,
    getUserById,
    postUser,
    updateUserById,
    deleteUser
} from '../controllers/UserController.js'
const router = express.Router();

router.get('/',         authMiddleware, roleMiddleware, getUsers)
router.get('/:id',      authMiddleware, roleMiddleware, getUserById)
router.post('/',        authMiddleware, roleMiddleware, postUser)
router.put('/:id',      authMiddleware, roleMiddleware, updateUserById)
router.delete('/:id',   authMiddleware, roleMiddleware, deleteUser )

const register = (request, response) => {
    response.send(`<!DOCTYPE html>
                    <html lang="es">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>REgistro</title>
                    </head>
                    <body>
                        <form action="/api/users" method="post"  enctype="application/x-www-form-urlencoded">
                            <label for="name">Nombre</label>
                            <input id="name" name="name" type="text">

                            <label for="email">Email</label>
                            <input id="email" name="email" type="email">

                            <label for="password">Contraseña</label>
                            <input id="password" name="password" type="password">

                            <button type="submit">Registrarme</button>
                        </form>
                    </body>
                    </html>`);
}

router.get('/register', register);

export default router;