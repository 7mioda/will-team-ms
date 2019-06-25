import mongoose from 'mongoose';

const loanContractSchema = new mongoose.Schema(
    {
        interestRate: Number,
        client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
        banker: { type: mongoose.Schema.Types.ObjectId, ref: 'Banker' },
        loan: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
        files: [ String ],
        amount: Number,
        createdAt: { type: Date, required: true, default: Date.now },
    },
    {
        collection: 'LoanContract',
    },
);
loanContractSchema.methods.toJSON = function userToJSON() {
    return {
        id: this._id,
        client: this.client,
        banker: this.banker,
        loan: this.loan,
        amount: this.amount,
        files: this.files,
    };
};
export default mongoose.model('LoanContract', loanContractSchema);
