import express from 'express';
import {
  indexPage,
  userPage,
  experiencePage,
  addExperience,
} from '../controllers';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/users', userPage);
indexRouter.get('/experience', experiencePage);
indexRouter.post('/experience', addExperience);

export default indexRouter;
