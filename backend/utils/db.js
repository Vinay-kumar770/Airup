const mongoose =require("mongoose")


const url =process.env.mongourl;

const connectDb = async() =>{
    try{
     await mongoose.connect(url);
     console.log("connection succesful to DB");
    }
    catch(error)
    {
        console.error("database connection failed");
        console.log(error);
        process.exit(0);
    }
}

module.exports=connectDb;