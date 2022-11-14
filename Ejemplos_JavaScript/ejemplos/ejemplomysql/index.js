'use strict';

// cargamos el driver

const mysql = require('mysql');

//  creamos una conexion

const conexion = mysql.createConnection({
  host: 'didimo.es',
  user: 'usuariocurso',
  password: 'us3r',
  database: 'cursonode'
});

// conectamos

conexion.connect();

// lanzamos una consulta

conexion.query('SELECT * FROM agentes', (err, filas, campos) => {
    if (err) { // existe error si es distinto de 0
        console.log(err);
        process.exit(1); // devuelvo un codigo de salida distinto a 0 puede ser 1 o el que sea
    }
    // visualizamos resultados
    console.log(filas);
})


