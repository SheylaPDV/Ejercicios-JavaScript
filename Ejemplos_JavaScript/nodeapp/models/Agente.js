'use strict';

const mongoose = require('mongoose');

// definir un esquema con el metodo Schema, si no cumple el esquema, no entra en la base de datos

const agenteSchema = mongoose.Schema({
    name: {type: String, index: true }, //metemos indice por la propiedad name
    age: { type: Number, min: 18, max: 120, index: true }, // que sea tipo numero y con minimo y maximo
    // infoDeInteres: mongoose.Schema.Types.Mixed // informacion variada que no sabemos que puede ser
}, {
    // en caso de que queramos conectar este modelo con una coleccion con otro nombre
    // collection: 'otro_nombre' 
});

//creamos metodo estatico (del modelo)

agenteSchema.statics.lista = function(filtros, skip, limit, select, sort) {
    const query = Agente.find(filtros);
    query.skip(skip);
    query.limit(limit);
    query.select(select);
    query.sort(sort);
    return query.exec();
}


//creamos uin metodo de instancia
agenteSchema.methods.saluda = function() {
    console.log('Hola soy', this.name);
}

// creo el modelo con ese esquema

const Agente = mongoose.model('Agente'/*mongoose le quita la mayuscula y lo pluraliza, porque en realidad la db se llama agentes*/, agenteSchema);

// opcional - exporto el modelo

module.exports = Agente;