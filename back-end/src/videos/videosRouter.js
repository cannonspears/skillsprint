const router = require('express').Router()
const controller = require('./videosController')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/:video_id').get(controller.read).all(methodNotAllowed)
router
    .route('/')
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

module.exports = router
