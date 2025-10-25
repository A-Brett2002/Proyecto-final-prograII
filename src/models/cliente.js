const pool = require('./mysql');

const store = async (telefono, nombre, direccion, nit, precio, estado) => {
    const cliente = 'INSERT INTO cliente(telefono, nombre, direccion, nit, precio, estado, fecha) VALUES (?, ?, ?, ?, ?, ?, ?)';
    try {
    const [result] = await pool.execute(cliente, [telefono, nombre, direccion, nit, precio, estado, new Date()]);
    return result;
    }catch (error) {
        console.error('Error inserting cliente:', error);
        throw error;
        
    }
}
const findAll = async () => {
    const cliente = 'SELECT * FROM cliente';
    try {
        const [rows] = await pool.execute(cliente);
        return rows;
    } catch (error) {
        console.error('Error fetching clientes:', error);
        throw error;
    }
}
module.exports = {
    store,
    findAll
}