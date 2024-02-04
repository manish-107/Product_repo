import express from 'express';
import Routes from './routes/route.js'
import cors from 'cors'
const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/v1', Routes)

app.listen(PORT, () => {
    console.log(`server listening to ${PORT}`);
})
