const router = require('express').Router()
const controller = require('./usersController')
const methodNotAllowed = require('../errors/methodNotAllowed')

router
    .route('/:user_id')
    .get(controller.read)
    .put(controller.update)
    .delete(controller.remove)
    .all(methodNotAllowed)

router
    .route('/')
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

module.exports = router
