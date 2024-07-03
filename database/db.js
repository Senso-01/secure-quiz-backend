require('dotenv').config();
const mongoose = require('mongoose');

function connectDb() {
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true 
    });
    const con = mongoose.connection;
    con.on('open', () => {
        console.log("Database connected in Mongo Atlas (#cloud)");
    });
    con.on('error', (err) => {
        console.error("Connection error:", err);
    });
}

module.exports = connectDb;
