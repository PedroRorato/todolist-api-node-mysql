const express = require('express');
require('dotenv/config');

//Initialize App
const app = express();

//Alow JSON
app.use(express.json());

//Routes
app.use('/', require("./src/routes"));

//Listen
app.listen(3334);