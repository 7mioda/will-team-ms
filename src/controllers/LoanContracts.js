import LoanContract from '../models/loanContract';

export const addLoanContract = async (request, response) => {
    try {
        const { body, files } = request;
        const toPersistFiles = files.map(({ url }) => url);
        const loanContractData = Object.assign({}, body, { files: toPersistFiles });
        const loanContract = LoanContract(loanContractData);
        await loanContract.save();
        const populatedLoan = await LoanContract.findById(loanContract._id).populate('client').populate('loan');
        response.json({
            status: 200,
            loanContract: populatedLoan,
        });
    } catch (err) {
        console.log(`Failed to insert LoanContract: ${err}`);
        response.sendStatus(500);
    }
};

export const updateLoanContract = async (request, response) => {
    try {
        const { body } = request;
        const loanContract = await LoanContract.findByIdAndUpdate(body.id, body, {
            new: true,
        }).populate('client').populate('loan');
        response.json({
            loanContract,
        });
    } catch (err) {
        console.log(`Failed to update LoanContract: ${err}`);
        response.sendStatus(500);
    }
};

export const deleteLoanContract = async (request, response) => {
    try {
        const {
            params: { loanContractId },
        } = request;
        await LoanContract.findByIdAndDelete(loanContractId);
        response.sendStatus(200);
    } catch (err) {
        console.log(`Failed to delete LoanContract: ${err}`);
        response.sendStatus(500);
    }
};

export const getAllLoanContracts = async (request, response) => {
    try {
        const loanContracts = await LoanContract.find().populate('client').populate('loan');
        response.json({
            status: 200,
            loanContracts,
        });
    } catch (err) {
        console.log(`Failed to fetch data: ${err}`);
        response.sendStatus(500);
    }
};

export const getLoanContract = async (request, response) => {
    try {
        const {
            params: { loanContractId },
        } = request;
        const loanContract = await LoanContract.findById(loanContractId);
        response.json({
            status: 200,
            loanContract,
        });
    } catch (err) {
        console.log(`Failed to fetch data: ${err}`);
        response.sendStatus(500);
    }
};
