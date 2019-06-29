import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
        role: { type: String, enum: ['banker', 'user'], default: 'user' },
        createdAt: { type: Date, required: true, default: Date.now },
    },
    {
        collection: 'User',
    },
);
userSchema.methods.toJSON = function userToJSON() {
    return {
        id: this._id,
        email: this.email,
        password: this.password,
    };
};
let model = null;
if (!mongoose.models['User']) {
    model =  mongoose.model('User', userSchema);
}
else {
    model =  mongoose.model('User');
}

export default model;
