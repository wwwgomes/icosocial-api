import { Router } from 'express';

import UserController from '../app/controllers/UserController';
import NewPasswordController from '../app/controllers/NewPasswordController';
import PasswordForgottenController from '../app/controllers/PasswordForgottenController';

import validateUserStore from '../app/validators/UserStore';
import validateUserUpdater from '../app/validators/UserUpdater';
import validatePasswdUpdater from '../app/validators/PasswdUpdater';

import authMiddleware from '../app/middlewares/auth';

const routes = Router();

routes.post('/', validateUserStore, UserController.store);

routes.put('/passwd/recover', PasswordForgottenController.update);
routes.put('/', authMiddleware, validateUserUpdater, UserController.update);
routes.put(
  '/passwd/update',
  authMiddleware,
  validatePasswdUpdater,
  NewPasswordController.update
);

export default routes;