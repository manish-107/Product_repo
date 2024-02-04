import express from 'express';
import Routes from './routes/productRoute.js'
import cors from 'cors'
import { dbConnect } from './config/dbConnect.js';
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

dbConnect();

app.use('/api/v1', Routes)

app.listen(PORT, () => {
    console.log(`server listening to ${PORT}`);
})
