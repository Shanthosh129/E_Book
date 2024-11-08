import express, { request } from 'express';
import { PORT , MONGO_URI} from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRouter from './routes/bookRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());

// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );


app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('MERN Project');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


mongoose.connect(MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Error:', err);
});