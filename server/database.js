const mongoose = require('mongoose');
require('dotenv').config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;
const URI = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/barbearia?retryWrites=true&w=majority&appName=Cluster0`;

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(URI);
        console.log("Conectado ao MongoDB!");
        return dbConn;
    } catch (error) {
        console.error("Erro na conexão:", error);
    }
};

conn();

module.exports = conn;