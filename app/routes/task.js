const express = require('express')
require('../../config/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {
    session: false
})
const controller = require('../controllers/task')

const router = express.Router()

/**
 * Ruta: /task GET
 */
router.get(
    `/`,
    controller.getData
)

/**
 * Ruta: /task GET BY ID
 */
router.get(
    `/:id`,
    controller.getSingle
)

/**
 * Ruta: /task POST
 */
router.post(
    `/`,
    controller.insertData
)

/**
 * Ruta: /task PUT
 */
router.put(
    `/:id`,
    controller.updateSingle
)


/**
 * Ruta: /task DELETE
 */
router.delete(
    `/:id`,
    controller.deleteSingle
)


module.exports = router