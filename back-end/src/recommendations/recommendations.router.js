const router = require('express').Router({ mergeParams: true })
const controller = require('./recommendations.controller')
const methodNotAllowed = require('../errors/asyncErrorHandler')

router
    .route('/:recommendationId')
    .get(controller.read)
    .delete(controller.delete)
    .all(methodNotAllowed)

router
    .route('/')
    .get(controller.list)
    // .create(controller.create)
    .all(methodNotAllowed)

module.exports = router
