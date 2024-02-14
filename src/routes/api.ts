import { Router } from 'express';
import jetValidator from 'jet-validator';

import Paths from '../constants/Paths';
import User from '@src/models/User';
import UserRouter from './UserRouter';
import AuthRouter from './AuthRouter';


// **** Variables **** //

const apiRouter = Router(),
  validate = jetValidator();
  

// Add UserRouter
apiRouter.use(Paths.User.Base, UserRouter);

apiRouter.use(Paths.Auth.Base, AuthRouter)

// **** Export default **** //

export default apiRouter;
