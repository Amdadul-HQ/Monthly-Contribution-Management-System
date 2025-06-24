import express from 'express';
import { AuthRoutes } from '../../module/auth/auth.route';
import { MemberRoutes } from '../../module/member/member.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path:'/members',
    route:MemberRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
