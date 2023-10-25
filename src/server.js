const express = require('express');
require('./database');
require('dotenv').config();
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan') // me muestra las respuestas del servidor
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');

// Initializations
const app = express();


// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
            // Validamos que el metodo dentro de los servidores sea el correcto
const methodsHttpValidate = (req, res, next) => {
    if (req.method !== 'GET' && req.method !== 'POST' && req.method !== 'PUT' && req.method !== 'DELETE') {
        return res.status(400).send('Método HTTP no válido');
    }
    next();
};
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUnitialized: true
}));
app.use(flash());

// Global variables
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    next();
});


// Routes con "app.use" llamamos los middlewares
app.use(require('./routes/list-view-router'));
app.use(require('./routes/list-edit-router'));
app.use(require('./routes/notes.routes'));
app.use(methodsHttpValidate);
app.use(express.json());

// Server on
app.listen(app.get('port'), () => {
    console.log(`Server on port`, app.get('port'));
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;