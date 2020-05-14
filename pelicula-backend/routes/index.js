const express = require('express');
const router = express.Router();
const peliculasRouter = require('./peliculas');
const usuariosRouter = require('./users');

/* GET home page. */
router.use('/peliculas', peliculasRouter);
router.use('/usuarios', usuariosRouter);




module.exports = router;