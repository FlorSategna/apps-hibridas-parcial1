import express from 'express'
import AuthController from '../controllers/AuthController.js'
import validateRegister from '../middlewares/validateRegister.js'
import validateLogin from '../middlewares/validateLogin.js'

const router = express.Router();
const controller = new AuthController();

router.post('/register',    validateRegister, controller.register);
router.post('/login',       validateLogin, controller.login);


export default router