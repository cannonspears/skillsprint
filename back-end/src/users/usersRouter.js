const router = require('express').Router({ mergeParams: true })
const controller = require('./usersController')
const historyRouter = require('../history/history.router')
const recommendationsRouter = require('../recommendations/recommendations.router')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.use('/:user_id/history', controller.userExists, historyRouter)
router.use('/:user_id/recommendations', controller.userExists, recommendationsRouter)

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
