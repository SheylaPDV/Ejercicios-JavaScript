var express = require('express');
const { query, validationResult } = require('express-validator');
const { sleep } = require('../lib/utils');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const segundo = (new Date()).getSeconds();

  res.locals.ejemplo = '<script>alert("esto es un ejemplo")</script>'; // hemos metido <%= ejemplo %> en views/index y se muestra en pantalla

  res.locals.usuarios = [
    { nombre: 'Smith', edad: 30 },
    { nombre: 'Brown', edad: 37 },
  ];

  res.locals.condicion = {
    segundo,
    esPar: segundo % 2 === 0,
  }

  res.render('index');
});


router.get('/parametroenruta/:dato([0-9]+)', (req, res, next) => {
  const dato = req.params.dato;
  console.log(req.params);

  res.send('ok');
});

router.get('/talla/:talla(L|XL|S)/color/:color?', (req, res, next) => { //con interrogacion al lado, es param,etro opcional y no da error
  const talla = req.params.talla;
  const color = req.params.color;

  console.log(req.params);

  res.send(`ok talla ${talla} y del color ${color}`);
});

router.get('/enquerystring', [
  //validaciones
  query('talla').isNumeric().withMessage('debe ser numerica'),
  query('color').custom(color => { return color === 'red'; }).withMessage('solo vale rojo') // validacion custom
], (req, res, next) => {
  validationResult(req).throw(); // valida y si no se cumple. el throw hace que vaya a next y seria error
  const talla = req.query.talla;
  const color = req.query.color;

  console.log(req.query);

  res.send(`ok la talla ${talla} y del color ${color}`);

});

router.post('/enelbody', (req, res, next) => {
  const nombre = req.body.nombre;

  console.log(req.body);
  res.send(`Recibido el nombre ${nombre}`);
})

router.get('/espera', async (req, res, next) => {
  try {
    await sleep(3000);
    res.send('pasaron los 3 segundos');
  } catch (err) {
    next(err)
  }
})

module.exports = router;
