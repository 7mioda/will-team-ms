import mongoose from 'mongoose';

const BankerSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        registrationNumber: Number,
        type: { type: String, enum: ['banker', 'director'] },
        photo: String,
    },
    {
        collection: 'Banker',
    },
);
BankerSchema.methods.toJSON = function bankerToJSON() {
    return {
        id: this._id,
        user: this.user,
        registrationNumber: this.registrationNumber,
        type: this.type,
        photo: this.photo,
    };
};
export default mongoose.model('Banker', BankerSchema);
