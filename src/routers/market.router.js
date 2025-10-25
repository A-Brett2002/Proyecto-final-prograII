const express = require('express');
const router = express.Router();
const Controller = require('../controllers/market.controller');
router.get('/create',Controller.create);
router.post('/',Controller.store);
router.get('/',Controller.index);
router.get('/:id',Controller.show);
router.get('/carts',Controller.carts);
module.exports = router;