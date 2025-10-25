const model = require('../models/cliente');
const create = (req, res) => {
    res.render('cliente/create');
}
const store = async (req, res) => {
    const { telefono, nombre, direccion, nit, precio, estado, fecha } = req.body;
    try {
        const result = await model.store(telefono, nombre, direccion, nit, precio, estado, fecha);
        res.render('cliente/create', { message: 'Cliente creado exitosamente', clienteID: result.insertID+1 });
    } catch (error) {
        res.render('cliente/create', { error: 'Error al crear el cliente' });
    }
}
const index = async (req, res) => {
    try {
        const clientes = await model.findAll();
        res.render('cliente/index', { clientes });
    } catch (error) {
        res.render('cliente/index', { error: 'Error al obtener los clientes' });
    }
}
const edit = (req, res) => {
    res.render('cliente/edit');
}
module.exports = {
    create,
    store,
    index,
    edit
}