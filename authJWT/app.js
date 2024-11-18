const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const employeeRoutes = require('./routes/employeeRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const app = express();
// Configuración básica de CORS
app.use(cors({
    origin: 'http://localhost:4200', // Permitir solo solicitudes desde este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
  }));
// Middleware
app.use(express.json());
// Ruta de Usuario
app.use('/api/user', userRoutes);
// Ruta gregar Usuarios
app.use('/api/user', userRoutes);
// Rutas
app.use('/api', employeeRoutes);
// Ruta de prueba para generar un token (en un sistema real, esto iría en un controlador de autenticación)
app.post('/login', (req, res) => {
// Simulación de usuario
const user = { id: 1, username: 'admin'};
const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h'
});
res.json({ token });
});
module.exports = app;
