const service = require('./history.service')
const { dataHas } = require('./utils/validationFunctions')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

async function userDoesNotHaveVideoAlready(req, res, next) {
    const { user_id } = req.params

    const response = await service.list(user_id)

    if (!response.length === 0) {
        next({
            status: 400,
            message: `A history already exists for this video for user ${user_id}!`,
        })
    }

    next()
}

async function historyExists(req, res, next) {
    const history_id = Number(req.params.history_id)

    const history = await service.read(history_id)

    if (!history) {
        next({
            status: 404,
            message: `Either a history with ID ${history_id} does not exist for this user, or its videos do not exist in the videos table`,
        })
    }

    res.locals.history = history

    next()
}

async function create(req, res) {
    const { video_id } = req.body.data
    const { user_id } = req.params

    const newHistory = {
        video_id,
        user_id,
    }

    const response = await service.create(newHistory)

    res.status(200).json(response)
}

function read(req, res) {
    const { history } = res.locals
    res.json(history)
}

async function update(req, res) {
    const { history } = res.locals
    const { data } = req.body

    const updatedHistory = {
        ...history,
        ...data,
    }

    const response = await service.update(updatedHistory)
    res.status(200).json(response)
}

async function remove(req, res) {
    const history_id = Number(req.params.history_id)
    await service.remove(history_id)
    res.sendStatus(204)
}

async function list(req, res) {
    const user_id = Number(req.params.user_id)
    const response = await service.list(user_id)
    res.json(response)
}

module.exports = {
    create: [
        dataHas('video_id'),
        asyncErrorHandler(userDoesNotHaveVideoAlready),
        asyncErrorHandler(create),
    ],
    read: [asyncErrorHandler(historyExists), read],
    update: [
        asyncErrorHandler(historyExists),
        dataHas('video_completed'),
        asyncErrorHandler(update),
    ],
    delete: [asyncErrorHandler(remove)],
    list: [asyncErrorHandler(list)],
}
