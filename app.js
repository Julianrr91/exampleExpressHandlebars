
const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
const app = express()

const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('home', {
        nombre: 'Julian',
        titulo: 'RoadTrip Test'
    });
});

app.get('/generic', (req, res)=>{
    res.render('generic', {
        nombre: 'Julian',
        titulo: 'RoadTrip Test'
    });
});

app.get('/elements', (req, res)=>{
    res.render('elements', {
        nombre: 'Julian',
        titulo: 'RoadTrip Test'
    });
});

app.get('/hola-mundo', (req, res)=>{
    res.send('Hola mundo en su respectiva ruta');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
