const service = require('./history.service')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

async function historyExists (req, res, next) {
    const historyId = Number(req.params.historyId)
    const history = await service.read(historyId)
    if (history) {
        res.locals.history = history
        next()
    } else {
        next({
            status: 404,
            message: `Cannot find history. ID: ${historyId}`
        })
    }
}

async function create (req, res, next) {
    const history = req.body.data
    const response = await service.create(history)
    if (response) res.status(201).json({ data: response })
}

async function read (req, res, next) {
    const history = res.locals.history
    res.json({ data: history })
}

async function update (req, res, next) {
    
}

async function remove (req, res, next) {
    
}

async function list (req, res, next) {
    
}

module.exports = {
    create: [
        asyncErrorHandler(create)
    ],
    read: [
        asyncErrorHandler(historyExists),
        read
    ],
    update: [
        asyncErrorHandler(historyExists),
        update
    ],
    delete: [
        asyncErrorHandler(historyExists),
        remove
    ],
    list: [
        asyncErrorHandler(list)
    ],
}