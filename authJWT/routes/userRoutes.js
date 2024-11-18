const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta para iniciar sesión
router.post('/login', userController.login);

// Ruta para agregar usuarios
router.post('/add-user', userController.addUser);

module.exports = router;
