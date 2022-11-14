'use strict';

// conexion a la BD
const dbConnection = require('./lib/connectMongoose');
const agenteData = require('./initDB.agentes.json');
const readline = require('readline');
//  cargar modelos

const Agente = require('./models/Agente');
dbConnection.once('open', () => {
    main().catch(err => console.log('Hubo un error', err));

})


async function main() {
    const borrar = await pregunta('Estás seguro de que quieres borrar la base de datos?');
    if (!borrar) {
        process.exit(0);
    }
    // inicializar agentes
    await initAgentes();

    //desconectar la base de datossi
    dbConnection.close();
}




async function initAgentes() {
    // borrar todos los documentos de agentes que haya en la coleccion 
    const deleted = await Agente.deleteMany();
    console.log(`Eliminados ${deleted.deletedCount} agentes`);
    // crear agentes iniciales
    console.log(agenteData)
    const agentes = await Agente.insertMany(agenteData);
    console.log(`Creados ${agentes.length} agentes.`);
}


function pregunta(texto) {
    return new Promise((resolve, reject) => {
        //conectar readline a la consola
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        //hacemos pregunta
        rl.question(texto, respuesta => {
            rl.close();
            if (respuesta.toLowerCase() === 'si') {
                resolve(true);
                return;
            }
            resolve(false);
        })

    })
}