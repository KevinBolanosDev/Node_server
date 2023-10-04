const http = require('http');
const chalk = require('chalk');

const port = 8000;
const host = 'localhost';

const taskList = [
    { id: '1', description: 'Preparar el desayuno', completed: true},
    { id: '2', description: 'Preparar el estudio de trabajo',completed: true},
    { id: '3', description: 'Empezar a crear un proyecto con node', completed: false},
    { id: '4', description: 'Crear un servidor web', completed: true},
    { id: '5', description: 'Crear una lista de tareas en el servidor', completed: false }
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(taskList));
});

server.listen(port, host, () => {
    console.log(chalk.green(`El servidor se esta escuchando en http://${host}:${port}`));
});