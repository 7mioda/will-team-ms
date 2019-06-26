import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { log } from '../utils/logger';

dotenv.config();

const database = async () => {
    try {
        mongoose.connection
            .on('error', (error) => {
                log(`MongoDB Connection error ${error}`);
            })
            .on('close', () => {
                log('Mongodb closed!');
            })
            .once('open', () => {
                log('connected to database');
            });
        await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            writeConcern: 1,
        });
    } catch (err) {
        return err;
    }
    return true;
};

export default database;
