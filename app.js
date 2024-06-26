const express = require('express');
const app = express();

const port = 8080 || undefined;

app.use(express.static('public'));
//! instalar middleware cors
/** GET */
app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(port, () => {
    console.log('Escuchando en el port: ', port);
})