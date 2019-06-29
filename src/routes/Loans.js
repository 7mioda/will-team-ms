import express from 'express';
import fileUploader from '../middlewares/multer';
import {
    addLoan,
    updateLoan,
    deleteLoan,
    getAllLoans,
    getLoan,
} from '../controllers/Loans';

const router = express.Router();

router.get('/', getAllLoans);
router.get('/:loanId', getLoan);
router.post('/add', fileUploader.single('photo'), addLoan);
router.post('/update', updateLoan);
router.delete('/delete/:loanId', deleteLoan);

export default router;
