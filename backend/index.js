import express from 'express';
import Routes from './routes/route.js'
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use('/api', Routes)

app.listen(PORT, () => {
    console.log(`server listening to ${PORT}`);
})
