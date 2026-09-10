import authRouter from '@/auth/auth.route';
import leadRouter from '@/lead/lead.route';
import orderRouter from '@/order/order.route';
import pizzaRouter from '@/pizza/pizza.route';
import { API_ROUTES } from '@/routes/route.const';
import { Router } from 'express';

const apiRouter = Router();

apiRouter.use(API_ROUTES.Pizzas, pizzaRouter);
apiRouter.use(API_ROUTES.Orders, orderRouter);
apiRouter.use(API_ROUTES.Leads, leadRouter);
apiRouter.use(API_ROUTES.Auth, authRouter);

export default apiRouter;
