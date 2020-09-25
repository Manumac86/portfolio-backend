import express from 'express';
import {
  indexPage,
  userPage,
  messagesPage,
  addMessage,
} from '../controllers';
import { modifyMessage } from '../middleware';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/users', userPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, addMessage);

export default indexRouter;
