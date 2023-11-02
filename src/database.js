const mongoose = require('mongoose');

/**
 * Connect or create & connect to a database.
 * @date 10/31/2023 - 8:20:07 PM
 * @author Lim
 */
async function databaseConnect(){
    try {
        // DB connection can take some time.
        await mongoose.connect(process.env.DB_URI_LOCAL);
        // await mongoose.connect(process.env.DB_URI);
        console.log("Database connected");
    } catch (error) {
        console.warn(`databaseConnect failed to connect to DB: \n${JSON.stringify(error)}`);
    }
}

module.exports = {
    databaseConnect
}