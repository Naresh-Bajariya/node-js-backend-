import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("App on error:", error);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at Port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection Failed:", err);
  });

// import express from "express";
// const app = express();
// ;(async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

//        app.on('error',(error)=>{
//         console.log("error",error);
//        })

//        app.listen(process.env.PORT,()=>{
//         console.log(`App listening on ${process.env.PORT}`);
//        })

//     } catch (error) {
//         console.log("Error: " , error);
//     }
// })()
