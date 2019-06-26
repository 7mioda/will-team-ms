import Express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';

import usersRouter from './routes/users';
import loansRouter from './routes/Loans';
import bankersRouter from './routes/Bankers';
import clientsRouter from './routes/Clients';
import loanContractsRouter from './routes/LoanContracts';


const app = new Express();

// Managing Cors

app.use(cors());

// Setting up the Logger

app.use(logger('dev'));

// SettingUp BodyParser MiddleWare: Parse RequestBody
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting Routes
app.use('/api/users', usersRouter);
app.use('/api/loans', loansRouter);
app.use('/api/bankers', bankersRouter);
app.use('/api/clients', clientsRouter);
app.use('/api/loan-contracts', loanContractsRouter);

export default app;
