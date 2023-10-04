const http = require('http');
const chalk = require('chalk');

const port = 8000;
const host = 'localhost';

const taskList = [
    {Tarea: 'Preparar el desayuno'},
    {Tarea: 'Preparar el estudio de trabajo'},
    {Tarea: 'Empezar a crear un proyecto con node'},
    {Tarea: 'Crear un servidor web'},
    {Tarea: 'Crear una lista de tareas en el servidor'}
]

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(taskList));
});

server.listen(port, host, () => {
    console.log(chalk.green(`El servidor se esta escuchando en http://${host}:${port}`));
});