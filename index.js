import express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    console.log(`Cliente conectado`);
    response.send(`<h1>Hola desde Express.js👋</h1>`);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el Puerto ${port}`);
});