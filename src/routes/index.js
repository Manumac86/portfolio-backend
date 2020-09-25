import express from 'express';
import { indexPage, userPage, messagesPage } from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/users', userPage);
indexRouter.get('/messages', messagesPage);

export default indexRouter;
