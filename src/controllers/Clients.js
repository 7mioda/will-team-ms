import Client from '../models/Client';
import User from '../models/user';

export const addClient = async (request, response) => {
    try {
        const { body: { email, password, cin, firstName, lastName, birthDate },  file: { url: photo } } = request;
        const user = User({ email, password });
        const  { _id } = await user.save();
        const Client = Client({
            user: _id,
            cin,
            lastName,
            firstName,
            birthDate,
            photo,
        });
        await Client.save();
        response.json({
            status: 200,
            Client,
        });
    } catch (err) {
        console.log(`Failed to insert Client: ${err}`);
        response.sendStatus(500);
    }
};

export const updateClient = async (request, response) => {
    try {
        const { body } = request;
        const client = await Client.findByIdAndUpdate(body.id, body, {
            new: true,
        }).lean();
        response.json({
            client,
        });
    } catch (err) {
        console.log(`Failed to update Client: ${err}`);
        response.sendStatus(500);
    }
};

export const deleteClient = async (request, response) => {
    try {
        const {
            params: { clientId },
        } = request;
        await Client.findByIdAndDelete(clientId);
        response.sendStatus(200);
    } catch (err) {
        console.log(`Failed to delete Client: ${err}`);
        response.sendStatus(500);
    }
};

export const getAllClients = async (request, response) => {
    try {
        const clients = await Client.find();
        response.json({
            status: 200,
            clients,
        });
    } catch (err) {
        console.log(`Failed to fetch data: ${err}`);
        response.sendStatus(500);
    }
};

export const getClient = async (request, response) => {
    try {
        const {
            params: { ClientId },
        } = request;
        const client = await Client.findById(ClientId);
        response.json({
            status: 200,
            client,
        });
    } catch (err) {
        console.log(`Failed to fetch data: ${err}`);
        response.sendStatus(500);
    }
};
