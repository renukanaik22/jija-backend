const mongoose = require('mongoose');
const MONGO_URI = process.env.NODE_ENV === 'production'
    ? process.env.MONGO_URI
    : 'mongodb://localhost:27017/jija';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
module.exports = connectDB;
