import mongoose from "mongoose";

let url = process.env.URI_MONGO


async function dataBaseConnection(){
    try {
      await mongoose.connect(process.env.URI_MONGO)
       console.log("Database is connected");
    } catch (error) {
       console.log(error);
    }
   }
   dataBaseConnection()