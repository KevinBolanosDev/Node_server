const { Router } = require('express');
const router = Router();


function errorHandler(req, res, next) {
    if (req.method === 'POST') {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'Cuerpo vacío'});
        }
        
        const { title, description } = req.body
        const requiredAttributes = new Task({title, description});
         for (const attribute of requiredAttributes) {
        if (!req.body[attribute]) {
            return res.status(400).json({ error: `Falta el atributo ${attribute}`});
            }
        }
        next();
    }
}

// Routers para crear, eliminar y actualizar tareas
router.post('/task/created', errorHandler, (req, res) => {
    res.send('Ruta para crear tarea')
});

router.delete('/task/eliminated', (req, res) => {
    res.send('Ruta para eiminar tarea')
});

router.put('/task/actualization', (req, res) => {
    res.send('Ruta para actualizar tarea')
});

module.exports = router;