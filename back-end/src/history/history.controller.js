const service = require('./history.service')
const { dataHas, userIdIsNumber } = require('./utils/validationFunctions')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

async function historyExists(req, res, next) {
    const history_id = Number(req.params.history_id)

    const response = await service.read(history_id)

    if (!response) {
        next({
            status: 404,
            message: `Cannot find history with ID: ${history_id}`,
        })
    }

    res.locals.history = response

    next()
}

async function create(req, res) {
    const history = req.body.data
    const response = await service.create(history)
    res.status(200).json({ data: response })
}

function read(req, res) {
    const { history } = res.locals
    console.log('reading history')
    res.json({ data: history })
}

async function update(req, res) {
    const { history } = res.locals
    const { data } = req.body
    const updatedHistory = {
        ...history,
        ...data,
        history_id: history.history_id,
    }
    const response = await service.update(updatedHistory)
    if (response) res.status(200).json({ data: response[0] })
}

async function remove(req, res) {
    const historyId = Number(req.params.historyId)
    await service.remove(historyId)
    res.sendStatus(204)
}

async function list(req, res) {
    const user_id = Number(req.params.user_id)
    const response = await service.list(user_id)
    if (response) res.json({ data: response })
}

module.exports = {
    create: [
        dataHas('user_id'),
        userIdIsNumber(),
        dataHas('video_id'),
        asyncErrorHandler(create),
    ],
    read: [asyncErrorHandler(historyExists), read],
    update: [
        asyncErrorHandler(historyExists),
        dataHas('user_id'),
        userIdIsNumber(),
        dataHas('video_id'),
        dataHas('video_completed'),
        asyncErrorHandler(update),
    ],
    delete: [asyncErrorHandler(historyExists), asyncErrorHandler(remove)],
    list: [asyncErrorHandler(list)],
}
