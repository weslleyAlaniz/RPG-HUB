import mongoose from "mongoose";


async function connectaNaDataBase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
}

export default connectaNaDataBase;


