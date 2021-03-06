const express = require('express');
const routes = express.Router();

const TaskController = require('./controllers/TaskController');
const UserController = require('./controllers/UserController');

routes.get('/tasks', TaskController.index );
routes.get('/tasks/:id', TaskController.show );
routes.post('/tasks', TaskController.store );
routes.put('/tasks/:id', TaskController.updateTexts );
routes.patch('/tasks/:id', TaskController.updateStatus );
routes.delete('/tasks/:id', TaskController.destroy );

routes.get('/users', UserController.index );
routes.get('/users/:id', UserController.show );
routes.post('/users', UserController.store );
routes.put('/users/:id', UserController.update );
routes.delete('/users/:id', UserController.destroy );

module.exports = routes;