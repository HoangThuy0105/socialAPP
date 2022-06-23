import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import posts from './routers/posts.js';
import authRouter from './routers/auth.js'
import userRouter from './routers/user.js';

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000;
const URI = process.env.DATABASE_URL

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(cors());

app.use('/posts', posts)
app.use('/auth', authRouter)
app.use('/v1/user', userRouter)

mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to DB")
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch((e) => {
        console.log(`err ${e.message}`)
    })
