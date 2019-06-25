import express from 'express';
import {
    addBanker,
    updateBanker,
    deleteBanker,
    getAllBankers,
    getBanker,
} from '../controllers/Bankers';
import fileUploader from '../middlewares/multer';

const router = express.Router();

router.get('/', getAllBankers);
router.get('/:bankerId', getBanker);
router.post('/add', fileUploader.single('photo'), addBanker);
router.post('/update', fileUploader.single('photo'), updateBanker);
router.delete('/delete/:bankerId', deleteBanker);

export default router;
