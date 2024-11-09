import mongoose from "mongoose";
let url = process.env.URI_MONGO



async function dataBaseConnection(){
    try {
      await mongoose.connect(process.env.URI_MONGO)
       console.log("Base de datos conectada");
    } catch (error) {
       console.log(error);
    }
   }
   dataBaseConnection()