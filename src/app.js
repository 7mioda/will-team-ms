import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

import usersRouter from './routes/users';


const app = new Express();

// Managing Cors

app.use(cors());

// Setting up the Logger

app.use(logger('dev'));

// SettingUp BodyParser MiddleWare: Parse RequestBody
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting Routes
app.use('/users', usersRouter);

export default app;
