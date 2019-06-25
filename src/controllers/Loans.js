import Loan from '../models/loan';

export const addLoan = async (request, response) => {
    try {
        const { body } = request;
        const loan = Loan(body);
        await loan.save();
        response.json({
            status: 200,
            loan,
        });
    } catch (err) {
        console.log(`Failed to insert loan: ${err}`);
        response.sendStatus(500);
    }
};

export const updateLoan = async (request, response) => {
    try {
        const { body } = request;
        const loan = await Loan.findByIdAndUpdate(body.id, body, {
            new: true,
        }).lean();
        response.json({
            loan,
        });
    } catch (err) {
        console.log(`Failed to update loan: ${err}`);
        response.sendStatus(500);
    }
};

export const deleteLoan = async (request, response) => {
    try {
        const {
            params: { loanId },
        } = request;
        await Loan.findByIdAndDelete(loanId);
        response.sendStatus(200);
    } catch (err) {
        console.log(`Failed to delete loan: ${err}`);
        response.sendStatus(500);
    }
};

export const getAllLoans = async (request, response) => {
    try {
        const loans = await Loan.find();
        response.json({
            status: 200,
            loans,
        });
    } catch (err) {
        console.log(`Failed to fetch data: ${err}`);
        response.sendStatus(500);
    }
};

export const getLoan = async (request, response) => {
    try {
        const {
            params: { loanId },
        } = request;
        const loan = await Loan.findById(loanId);
        response.json({
            status: 200,
            loan,
        });
    } catch (err) {
        console.log(`Failed to fetch data: ${err}`);
        response.sendStatus(500);
    }
};
