import Banker from '../models/Banker';
import User from '../models/User';

export const addBanker = async (request, response) => {
    try {
        const { body: { email, password, registrationNumber, type },  file: { url: photo } } = request;
        const user = User({ email, password });
        const  { _id } = await user.save();
        console.log(registrationNumber, type, email, password);
        const banker = Banker({
            user: _id,
            registrationNumber,
            type,
            photo,
        });
        await banker.save();
        response.json({
            status: 200,
            banker,
        });
    } catch (err) {
        console.log(`Failed to insert Banker: ${err}`);
        response.sendStatus(500);
    }
};

export const updateBanker = async (request, response) => {
    try {
        const { body } = request;
        const banker = await Banker.findByIdAndUpdate(body.id, body, {
            new: true,
        }).lean();
        response.json({
            banker,
        });
    } catch (err) {
        console.log(`Failed to update Banker: ${err}`);
        response.sendStatus(500);
    }
};

export const deleteBanker = async (request, response) => {
    try {
        const {
            params: { bankerId },
        } = request;
        await Banker.findByIdAndDelete(bankerId);
        response.sendStatus(200);
    } catch (err) {
        console.log(`Failed to delete banker: ${err}`);
        response.sendStatus(500);
    }
};

export const getAllBankers = async (request, response) => {
    try {
        const bankers = await Banker.find();
        response.json({
            status: 200,
            bankers,
        });
    } catch (err) {
        console.log(`Failed to fetch data: ${err}`);
        response.sendStatus(500);
    }
};

export const getBanker = async (request, response) => {
    try {
        const {
            params: { bankerId },
        } = request;
        const banker = await Banker.findById(bankerId);
        response.json({
            status: 200,
            banker,
        });
    } catch (err) {
        console.log(`Failed to fetch data: ${err}`);
        response.sendStatus(500);
    }
};
