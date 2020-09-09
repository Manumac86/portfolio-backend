import express from 'express';
import { indexPage, userPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/users', userPage);

export default indexRouter;
