const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');
router.get('/create',clienteController.create);
router.post('/',clienteController.store);
router.get('/',clienteController.index);
module.exports = router;