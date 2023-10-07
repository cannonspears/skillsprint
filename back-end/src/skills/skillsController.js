const service = require('./skillsService')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

// Validation //
async function checkSkillExists(req, res, next) {
    const { skill_id } = req.params
    res.locals.skill = await service.read(skill_id)
    if (!res.locals.skill) {
        next({ status: 404, message: `Skill with ID ${skill_id} not found` })
    }
    next()
}

// Services //
async function read(req, res) {
    const { skill } = res.locals
    res.json(skill)
}

async function list(req, res) {
    const skills = await service.list()
    res.send(skills)
}

module.exports = {
    read: [asyncErrorHandler(checkSkillExists), read],
    list: asyncErrorHandler(list),
}
