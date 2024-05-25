const express = require('express')
const router = express.Router()

const routes = [
    {
        path: 'task'
    },
    {
        path: 'auth'
    },
]

routes.forEach(route => {
    return router.use(`/${route.path}`, require(`./${route.path}`))
})

module.exports = router