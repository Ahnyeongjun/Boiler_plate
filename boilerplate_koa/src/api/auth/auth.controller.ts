import { AuthService } from './auth.service';
import { UserRepository } from '../../db/repository';
import { Context, Next } from 'koa';
import { CreateUserRequest, Payload } from '../../interface';
import { generateToken, decodedToken } from '../../lib';
import { TokenRequest } from '../../interface/request/token';

export class AuthController {
  private userRepository: UserRepository = new UserRepository();
  private authService: AuthService = new AuthService(this.userRepository);

  public createUser = async (ctx: Context) => {
    try {
      const userData: CreateUserRequest = ctx.request.body;
      await this.authService.createUser(userData);
      ctx.status = 201;
    } catch (error) {
      console.log(error);
      ctx.status = 400;
    }
  };
  public duplicatedById = async (ctx: Context, next: Next) => {
    const userData: CreateUserRequest = ctx.request.body;
    const user = await this.authService.findOneById(userData.id);

    if (user === undefined) {
      ctx.status = 200;
      await next();
    } else {
      ctx.status = 403;
    }
  };
  public login = async (ctx: Context) => {
    const userData: CreateUserRequest = ctx.request.body;
    const user = await this.authService.login(userData);
    const payload: Payload = userData;
    if (user !== undefined) {
      ctx.set('Authorization', (await generateToken(payload)) as string);
      ctx.status = 200;
    } else {
      ctx.status = 403;
    }
  };
  public check = async (ctx: Context) => {
    const token: string = ctx.get('Authorization');
    console.log(token);
    if (await decodedToken(token)) {
      ctx.status = 200;
    } else {
      ctx.status = 400;
    }
  };
}
