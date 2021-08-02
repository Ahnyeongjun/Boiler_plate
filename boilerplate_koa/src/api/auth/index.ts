import Router from '@koa/router';

import { AuthController } from './auth.controller';

const router: Router = new Router();

export const auth = (): Router => {
  const authController: AuthController = new AuthController();

  router.post('/register', authController.duplicatedById, authController.createUser);
  router.post('/login', authController.login);
  router.get('/check', authController.check);
  router.get('/test', async (ctx: any) => {
    ctx.body = 'test';
  });
  return router;
};
