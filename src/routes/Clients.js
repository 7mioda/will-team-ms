import express from 'express';
import {
    addClient,
    updateClient,
    deleteClient,
    getAllClients,
    getClient,
} from '../controllers/Clients';
import fileUploader from '../middlewares/multer';

const router = express.Router();

router.get('/', getAllClients);
router.get('/:ClientId', getClient);
router.post('/add', addClient);
router.post('/update', fileUploader.single('photo'), updateClient);
router.delete('/delete/:clientId', deleteClient);

export default router;
