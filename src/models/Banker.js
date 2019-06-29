import mongoose from 'mongoose';

const BankerSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        registrationNumber: Number,
        cin: Number,
        firstName: String,
        lastName: String,
        birthDate: Date,
        type: { type: String, enum: ['banker', 'director'] },
        photo: String,
        createdAt: { type: Date, required: true, default: Date.now },
    },
    {
        collection: 'Banker',
    },
);
BankerSchema.methods.toJSON = function bankerToJSON() {
    return {
        id: this._id,
        user: this.user,
        cin: this.cin,
        firstName: this.firstName,
        lastName: this.lastName,
        birthDate: this.birthDate,
        registrationNumber: this.registrationNumber,
        type: this.type,
        photo: this.photo,
        createdAt: this.createdAt
    };
};
export default mongoose.model('Banker', BankerSchema);
