const { Router } = require('express');
const router = Router();

router.post('/task/created', (req, res) => {
    res.send('Ruta para crear tarea')
});

router.delete('/task/eliminated', (req, res) => {
    res.send('Ruta para eiminar tarea')
});

router.put('/task/actualization', (req, res) => {
    res.send('Ruta para actualizar tarea')
});

module.exports = router;