import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import logger from 'koa-logger';
import bodyparser from 'koa-body';
import helmet from 'koa-helmet';
import http from 'http';
import './config/env.ts';
import api from './api';
import db from './db';

const app = new Koa();
const router = new Router();

router.use('', api.routes());

app.use(helmet()).use(cors()).use(bodyparser()).use(logger()).use(router.routes()).use(router.allowedMethods());

let serverCallback = app.callback();
let httpServer = http.createServer(serverCallback);
//현대모터스
db.then(() =>
  httpServer.listen(process.env.SERVER_PORT || 8080, () => {
    console.log('SUCESS 8080');
  })
).catch(console.error);
