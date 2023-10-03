const router = require('express').Router()
const controller = require('./usersController')
const methodNotAllowed = require('../errors/methodNotAllowed')

router
    .route('/:userId')
    .get(controller.read)
    .put(controller.update)
    .all(methodNotAllowed)

router.route('/').post(controller.create).all(methodNotAllowed)

module.exports = router
