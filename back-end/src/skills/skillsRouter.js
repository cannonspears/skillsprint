const router = require('express').Router()
const controller = require('./skillsController')
const methodNotAllowed = require('../errors/methodNotAllowed')

router.route('/:skill_id').get(controller.read).all(methodNotAllowed)

router.route('/').get(controller.list).all(methodNotAllowed)

module.exports = router
