// Esta funcion me llama todas las funciones creadas
const indexCtrl = {};

// Esto me renderiza los archivos .hbs
indexCtrl.renderIndex = (req, res) => {
    res.render('index')
};

indexCtrl.renderAbout = (req, res) => {
    res.render('about')
}

module.exports = indexCtrl;