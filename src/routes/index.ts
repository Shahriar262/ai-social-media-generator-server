import express from 'express';
import { AiRoutes } from './ai.route';
import { UserRoutes } from './user.route';
import { ContentRoutes } from './content.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/contents',
    route: ContentRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/ai',
    route: AiRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;