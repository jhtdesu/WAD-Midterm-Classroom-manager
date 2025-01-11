import express from 'express';
import {MONGO_URI, PORT} from './config.js';
import mongoose from 'mongoose';
import { Student } from './models/studentModel.js';
import studentRoutes from './routes/studentRoutes.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/students', studentRoutes);

mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });