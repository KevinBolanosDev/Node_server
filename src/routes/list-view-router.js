const { Router } = require('express');
const router = Router();

router.get('/task/completed', (req, res) => {
    res.render('completed')
});

router.get('/task/incompleted', (req, res) => {
    res.render('incompleted')
});

router.get('/notes', (req, res) => {
    res.render('notes')
});

router.get('/about', (req, res) => {
    res.render('about')
});

module.exports = router;
