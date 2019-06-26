import http from 'http';
import dotenv from 'dotenv';
import { log } from './utils/logger';
import 'babel-polyfill';

import app from './app';
import database from './models/database';

dotenv.config();
database().then(() => {
    log('Database is connected');
});

const PORT = process.env.PORT || '3000';
const server = http.createServer(app);
server.listen(PORT);
server.on('listening', () => {
    log(`Server listening on PORT ${PORT}`);
});
server.on('error', (error) => {
    log(`Error ${error}`);
});
