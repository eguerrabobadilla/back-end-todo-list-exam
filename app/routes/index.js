const express = require('express')
const router = express.Router()

const routes = [
    {
        path: 'task'
    }
]

routes.forEach(route => {
    return router.use(`/${route.path}`, require(`./${route.path}`))
})

module.exports = router