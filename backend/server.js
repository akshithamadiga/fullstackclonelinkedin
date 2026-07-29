import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(postRoutes)
app.use(userRoutes)

const start = async () => {

    const connectDB = await mongoose.connect("mongodb+srv://akshithamadiga_db_user:JlhnmrMc3JeF90Yr@apnaproconnect.mzk7gkv.mongodb.net/?appName=apnaproconnect");


    app.listen(9091, () => {
        console.log("Server is running on port 9091")
    })

}
start();
