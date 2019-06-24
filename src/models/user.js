import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
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
export default mongoose.model('User', userSchema);
