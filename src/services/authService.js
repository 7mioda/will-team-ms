import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getToken = async ({ email, password }) => {
        const checkUser = await User.findOne({ email });
        if (checkUser === null) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ email, password: hashedPassword });
            const user = await newUser.save();
            const token = jwt.sign({ user: user.id }, 'app-super-secret', {
                expiresIn: 1, // 1s
            });
            const refreshToken = jwt.sign(
                { user: user.id },
                `app-super-secret${user.password}`,
                {
                    expiresIn: 604800, // une semaine
                },
            );
            return ({
                user,
                token: `JWT ${token}`,
                refreshToken,
            });
        } else {
            return null;
        }
};
