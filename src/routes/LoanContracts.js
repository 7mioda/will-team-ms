import express from 'express';
import {
    addLoanContract,
    updateLoanContract,
    deleteLoanContract,
    getAllLoanContracts,
    getLoanContract,
} from '../controllers/LoanContracts';
import fileUploader from '../middlewares/multer';

const MAX_FILES_COUNT = 10;

const router = express.Router();

router.get('/', getAllLoanContracts);
router.get('/:loanContractId', getLoanContract);
router.post('/add', fileUploader.array('files', MAX_FILES_COUNT) ,addLoanContract);
router.post('/update', updateLoanContract);
router.delete('/delete/:loanContractId', deleteLoanContract);

export default router;
