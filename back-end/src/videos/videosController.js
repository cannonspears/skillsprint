const service = require('./videosService')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

// Validation //
async function checkVideoExists(req, res, next) {
    const { video_id } = req.params

    const video = await service.read(video_id)

    if (!video) {
        next({ status: 404, message: `Video with ID ${video_id} not found` })
    }

    res.locals.video = video

    next()
}

// Services //
async function read(req, res) {
    const { video } = res.locals
    res.json(video)
}

async function list(req, res) {
    const data = await service.list()
    res.json(data)
}

module.exports = {
    read: [asyncErrorHandler(checkVideoExists), read],
    list: [asyncErrorHandler(list)],
}
