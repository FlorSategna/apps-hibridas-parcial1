import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import routerAPI from './routes/index.js';

dotenv.config();

const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

const port = process.env.PORT;
connectDB();

app.get('/', (request, response) => {
    console.log(`Cliente conectado`);
    response.send(`<h1>Hola desde Express.js👋</h1>`);
});

routerAPI(app);

app.listen(port, () => {
    console.log(`Servidor escuchando en el Puerto ${port}`);
});