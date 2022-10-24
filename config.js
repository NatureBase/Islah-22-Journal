require("dotenv").config({path: "./.env"});
const cfg = {
    port: process.env.PORT || 3000,
    mongoPassword: process.env.MONGO_DB_PASSWORD,
    mongoUsername: process.env.MONGO_DB_USERNAME
};

module.exports = cfg;