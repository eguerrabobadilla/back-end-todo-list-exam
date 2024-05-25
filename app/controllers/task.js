const mongoose = require('mongoose')
const model = require('../models/task')


const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}
/**
 * Obtener Todas las Tareas
 */

exports.getData = (req, res) => {
    model.find({}, (err, docs) => {
        res.send({
            items: docs
        })
    })
}

/**
 * Obtener Una Tarea
 */

exports.getSingle = (req, res) => {
    model.findOne({ _id: parseId(req.params.id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}

/**
 * Update Tarea
 */

exports.updateSingle = (req, res) => {
    const { id } = req.params
    const body = req.body
    model.updateOne(
        { _id: parseId(id) },
        body,
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}


/**
 * Insertar Tarea
 */
exports.insertData = (req, res) => {
    const data = req.body
    model.create(data, (err, docs) => {
        if (err) {
            res.status(422.).send({ error: 'Error' })
        } else {
            res.send({ data: docs })
        }

    })
}

/**
 * Eliminar Tareaa
 */

exports.deleteSingle = (req, res) => {
    const { id } = req.params
    model.deleteOne(
        { _id: parseId(id) },
        (err, docs) => {
            res.send({
                items: docs
            })
        })
}