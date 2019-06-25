import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema(
    {
        name: String,
        description: String,
        interestRate: Number,
        loanPapers: String,
        createdAt: { type: Date, required: true, default: Date.now },
    },
    {
        collection: 'Loan',
    },
);
loanSchema.methods.toJSON = function userToJSON() {
    return {
        id: this._id,
        name: this.name,
        description: this.description,
        interestRate: this.interestRate,
        loanPapers: this.loanPapers,
    };
};
export default mongoose.model('Loan', loanSchema);
