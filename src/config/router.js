 
import indexRouter from '@/routes/index';
import userRouter from '@/routes/users';

export default function (app) {
  app.use('/', indexRouter);
  app.use('/users', userRouter);
}
