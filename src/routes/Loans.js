import express from 'express';
import {
    addLoan,
    updateLoan,
    deleteLoan,
    getAllLoans,
    getLoan,
} from '../controllers/loans';

const router = express.Router();

router.get('/', getAllLoans);
router.get('/:loanId', getLoan);
router.post('/add', addLoan);
router.post('/update', updateLoan);
router.delete('/delete/:loanId', deleteLoan);

export default router;
