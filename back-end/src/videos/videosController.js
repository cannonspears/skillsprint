const service = require('./videosService')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

// Validation //
async function checkVideoExists(req, res, next) {
    const { video_id } = req.params

    const response = await service.read(video_id)

    if (!response) {
        next({ status: 404, message: `Video with ID ${video_id} not found` })
    }

    res.locals.video = response

    next()
}

// Services //
async function read(req, res) {
    const { video } = res.locals
    res.json({ data: video })
}

module.exports = {
    read: [asyncErrorHandler(checkVideoExists), read],
}
