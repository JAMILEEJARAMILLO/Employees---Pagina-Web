const pool = require('../config/db');

// Obtener todos los empleados
exports.getAllEmployees = async (req, res) => {
try {
const result = await pool.query('SELECT * FROM employees');
res.json(result.rows);
} catch (error) {
res.status(500).json({ message: error.message });
}
};

// Obtener empleado por ID
exports.getEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('SELECT * FROM employees WHERE employee_id = $1', [id]);
      if (result.rows.length === 0) return res.status(404).json({ message: 'Empleado no encontrado' });
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Eliminar empleado por ID
  exports.deleteEmployeeById = async (req, res) => {
    const { id } = req.params;
    try {
      const result = await pool.query('DELETE FROM employees WHERE employee_id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) return res.status(404).json({ message: 'Empleado no encontrado' });
      res.json({ message: 'Empleado eliminado', employee: result.rows[0] });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Actualizar empleado por ID
  exports.updateEmployeeById = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id } = req.body;
    try {
      const result = await pool.query(
        'UPDATE employees SET first_name= $1, last_name= $2, email= $3, phone_number= $4, hire_date= $5, job_id= $6, salary= $7, commission_pct= $8, manager_id= $9, department_id= $10 WHERE employee_id =  $11 RETURNING *',
        [first_name, last_name, email, phone_number, hire_date, job_id, salary, commission_pct, manager_id, department_id, id]
      );
      if (result.rows.length === 0) return res.status(404).json({ message: 'Empleado no encontrado' });
      res.json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

