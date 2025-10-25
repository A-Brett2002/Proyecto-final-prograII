require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

const mainRoutes = require('./src/routers/main.routes');
app.use('/', mainRoutes);

app.use('/market', require('./src/routers/market.router'));
app.use('/cliente', require('./src/routers/cliente.router'));
const port = process.env.PORT || 4002;
app.listen(port, () => console.log(`http://localhost:${port}`));