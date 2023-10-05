const service = require('./history.service')
const { dataHas, userIdIsNumber } = require('./utils/validationFunctions')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

async function historyExists(req, res, next) {
    const historyId = Number(req.params.historyId)
    const history = await service.read(historyId)
    if (history) {
        res.locals.history = history
        next()
    } else {
        next({
            status: 404,
            message: `Cannot find history. ID: ${historyId}`,
        })
    }
}

async function create(req, res) {
    const history = req.body.data
    const response = await service.create(history)
    if (response) res.status(200).json({ data: response[0] })
}

function read(_req, res) {
    const { history } = res.locals
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
    delete: [asyncErrorHandler(historyExists), remove],
    list: [asyncErrorHandler(list)],
}
