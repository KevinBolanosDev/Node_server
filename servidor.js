const http = require('http');
const chalk = require('chalk');

const port = 8000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ 
        nombre: 'Kevin Andres Bolanos N.', 
        mensaje: 'Hola, estoy creando un servidor con node'
    }));
});

server.listen(port, host, () => {
    console.log(chalk.green(`El servidor se esta escuchando en http://${host}:${port}`));
});