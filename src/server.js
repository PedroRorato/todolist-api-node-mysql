require('dotenv/config');
const express = require('express');
const routes = require("./routes");

//Initialize App
const app = express();

//Alow JSON
app.use(express.json());

//Routes
app.use(routes);

//Listen
app.listen(3334);