import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const register = async (request, response) => {
    try {
        const {
            body: { email, password },
        } = request;
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
            response.json({
                user,
                token: `JWT ${token}`,
                refreshToken,
            });
        } else {
            response.sendStatus(422);
        }
    } catch (err) {
        console.log(`Failed to insert new user: ${err}`);
        response.sendStatus(500);
    }
};

export const logIn = async (request, response) => {
    try {
        const {
            body: { email, password },
        } = request;
        const user = await User.findOne({ email });
        if (user != null && (await bcrypt.compare(password, user.password))) {
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
            response.json({
                status: 200,
                success: true,
                token: `JWT ${token}`,
                refreshToken,
            });
        } else {
            response.sendStatus(401);
        }
    } catch (err) {
        console.log(`Failed to login: ${err}`);
        response.sendStatus(500);
    }
};

export const getRefreshToken = async (request, response) => {
    try {
        const {
            headers: { authorization: token },
        } = request;
        const {
            body: { refreshToken },
        } = request;
        const { user: id } = jwt.decode(token.split(' ')[1], 'app-super-secret');
        const { password } = await User.findById(id);
        const refreshSecret = `app-super-secret${password}`;
        if (jwt.verify(refreshToken, refreshSecret)) {
            const refreshedToken = jwt.sign({ user: id }, 'app-super-secret', {
                expiresIn: 900, // 15 min
            });
            const newRefreshToken = jwt.sign(
                { user: id },
                `app-super-secret${password}`,
                {
                    expiresIn: 604800, // une semaine
                },
            );
            response.json({
                status: 200,
                success: true,
                token: `JWT ${refreshedToken}`,
                refreshToken: newRefreshToken,
            });
        }
    } catch (err) {
        console.log(`Failed to refresh token: ${err}`);
        response.sendStatus(500);
    }
};
