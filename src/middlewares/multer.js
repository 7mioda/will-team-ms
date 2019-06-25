import cloudinary from 'cloudinary';
import 'dotenv/config';
import cloudinaryStorage from 'multer-storage-cloudinary';
import multer from 'multer';
import shortid from 'shortid';

const {
    env: {
        API_SECRET: api_secret,
        API_KEY: api_key,
        CLOUD_NAME: cloud_name
    }
} = process;

cloudinary.config({
    cloud_name,
    api_key,
    api_secret,
});

const storage = cloudinaryStorage({
    cloudinary,
    folder: 'samples/ecommerce',
    filename: (request, file, callback) => {
        const { originalname } = file;
        const cloudName = `${originalname}-${shortid.generate()}`;
        callback(request, cloudName);
    },
});

export default multer({ storage });
