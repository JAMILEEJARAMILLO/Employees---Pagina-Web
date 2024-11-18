const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
const authenticateToken = require('../middleware/auth');

router.get('/empleados', authenticateToken,

employeeController.getAllEmployees);

// Buscar empleado por ID
router.get('/empleados/:id', authenticateToken, employeeController.getEmployeeById);

// Eliminar empleado por ID
router.delete('/empleados/:id', authenticateToken, employeeController.deleteEmployeeById);

// Actualizar empleado por ID
router.put('/empleados/:id', authenticateToken, employeeController.updateEmployeeById);

module.exports = router;
