
import 'dotenv/config';

import logger from 'morgan';
import express from 'express';
import path from 'path'
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import * as configs from '@/config';
import cors from 'cors';
 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(configs.corsConfig));
app.use(cookieParser());
 

// Load router paths
configs.routerConfig(app);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err);
});


export default app;
