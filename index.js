import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (request, response) => {
    console.log(`Cliente conectado`);
    response.send(`<h1>Hola desde Express.js👋</h1>`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el Puerto ${port}`);
});