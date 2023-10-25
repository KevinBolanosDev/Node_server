const { Router } = require('express');
const router = Router();

// Llamamos las funciones del archivo index.controller
const { renderIndex, renderAbout } = require('../controllers/index.controller') 

// Verifica los parametros
function verificarParametros(req, res, next) {
    const { parametro1, parametro2 } = req.query;

    if (!parametro1 || !parametro2) {
        return res.status(400).send({ error: 'Faltan parametros' });
    }

    if (!esParametroValido(parametro1) || !esParametroValido(parametro2)) {
        return res.status(400).json({ error: 'Parametros invalidos' });
    }
    next();
};

// Main route
router.get('/', renderIndex);

router.get('/task-list', (req, res) => {
    res.render('partials/navigation-list');
});

router.get('/task/completed', verificarParametros, (req, res) => {
    res.render('completed');
});

router.get('/task/incompleted', (req, res) => {
    res.render('incompleted');
});

router.get('/about', renderAbout);

module.exports = router;
