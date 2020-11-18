const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// Helpers
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});


app.get('/', function(request, response) {
    response.render('home', {
        name: 'Juan Villa',
        year: new Date().getFullYear()
    });
});

app.get('/about.hbs', function(request, response) {
    response.render('partials/about', { year: new Date().getFullYear() });
});

app.get('/data', function(request, response) {
    response.send('Hello Data');
});

app.listen(port, () => {
    console.log(`Listening for requests on port: ${port}`);
});