import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        cin: Number,
        firstName: String,
        lastName: String,
        numTel: Number,
        birthDate: Date,
        photo: String,
        type: { type: String, enum: ['user'], default: 'user' },
        createdAt: { type: Date, required: true, default: Date.now },
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
        firstName: this.firstName,
        lastName: this.lastName,
        birthDate: this.birthDate,
        photo: this.photo,
        numTel: this.numTel,
        createdAt: this.createdAt
    };
};
export default mongoose.model('Client', ClientSchema);
