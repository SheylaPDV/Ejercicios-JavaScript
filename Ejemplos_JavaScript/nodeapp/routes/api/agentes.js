'use strict';

const express = require('express');
var createError = require('http-errors');

const router = express.Router();

const Agente = require('../../models/Agente');

// GET /api/agentes
// Devuelve una lista de agentes
router.get('/', async (req, res, next) => { // llamda api de la base de datos
    // const agentes = [
    //     { name: 'Smith falso', age: 29 } //api creado falso
    // ]
    try {
        const name = req.query.name; // la req.query seria ?
        const age = req.query.age;
        const skip = req.query.skip;
        const limit = req.query.limit;
        const select = req.query.select; // campos que quiero
        const sort = req.query.sort;

        const filtros = {};



        if (name) {
            filtros.name = name;
        }

        if (age) {
            filtros.age = age;
        }

        const agentes = await Agente.lista(filtros, skip, limit, select, sort);

        res.json({ results: agentes })

    } catch (err) {
        next(err);
    }
});

// GET/api/agentes/:id
// devuelve un agente especifico
router.get('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        const agente = await Agente.findOne({ _id: id });

        if (!agente) {
            next(createError(404));
            return;
        }

        agente.saluda();

        res.json({ results: agente })

    } catch (err) {
        next(err);
    }

});

// POST /api/agentes
//  crea un nuevo agente

router.post('/', async (req, res, next) => {
    try {
        const agenteData = req.body;

        // creo un objeto de agente EN MEMORIA
        const agente = new Agente(agenteData);

        //guardar en base de datos
        const agenteGuardado = await agente.save();

        //devolver resultado
        res.status(201).json({ result: agenteGuardado });
    } catch (err) {
        next(err);

    }

})

//  DELETE /api/agentes/:id
// Elimina un agente

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;

        await Agente.deleteOne({ _id: id });

        res.json();
    } catch (err) {
        next(err);
    }
})

//  PUT /api/agentes:id
// actualizar un agente

router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id;
        const agenteData = req.body;

        let agenteActualizado
        try {
            agenteActualizado = await Agente.findByIdAndUpdate(id, agenteData, {
                new: true // esta opcion sirve para que nos devuelva el estado final del documento
            });



        } catch (err) {
            next(createError(422, 'invalid id'));
            return;
        }


        if (!agenteActualizado) {
            next(createError(404));
            return;
        }

        res.json({ result: agenteActualizado });
    } catch (err) {
        next(err)
    }
})

module.exports = router;