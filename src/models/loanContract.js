import mongoose from 'mongoose';

const loanContractSchema = new mongoose.Schema(
    {
        interestRate: Number,
        client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client' },
        loan: { type: mongoose.Schema.Types.ObjectId, ref: 'Loan' },
        files: [ String ],
        amount: Number,
        duration: Number,
        status: { type: String, enum: ['proposal', 'approved', 'verified', 'declined', 'archived'], default: 'proposal' },
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
        loan: this.loan,
        amount: this.amount,
        files: this.files,
        status: this.status,
        duration: this.duration,
        createdAt: this.createdAt
    };
};
export default mongoose.model('LoanContract', loanContractSchema);
