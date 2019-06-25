import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        cin: Number,
        firstName: String,
        lastName: String,
        birthDate: Date,
        photo: String,
    },
    {
        collection: 'Client',
    },
);
ClientSchema.methods.toJSON = function clientToJSON() {
    return {
        id: this._id,
        user: this.user,
        cin: this.cin,
        loan: this.loan,
        amount: this.amount,
        files: this.files,
    };
};
export default mongoose.model('Client', ClientSchema);
