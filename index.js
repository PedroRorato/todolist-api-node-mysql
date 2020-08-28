const express = require('express');
const { json } = require('express');

//Initialize App
const app = express();

//Alow JSON
app.use(json());

//Routes
app.use('/', require("./src/routes"));

//Listen
app.listen(3333);