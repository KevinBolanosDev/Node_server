const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


// Routes
app.use(require('./routes/list-view-router'));
app.use(require('./routes/list-edit-router'));

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(3000, () => {
    console.log(`The server is listening on http://localhost:${3000}`);
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;