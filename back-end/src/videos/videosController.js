const service = require('./videosService')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

// Validation //
async function checkVideoExists(req, res, next) {
    const { video_id } = req.params
    res.locals.video = await service.read(video_id)
    if (!res.locals.video) {
        next({ status: 404, message: `Video with ID ${video_id} not found` })
    }
    next()
}

function validateNewVideos(req, res, next) {
    const { videos } = req.body
    res.locals.videos = []

    videos.forEach((video) => {
        const { video_id, video_title, video_topic } = video

        if (!video_id || video_id.length === 0) {
            next({ status: 400, message: 'A video is missing the ID property' })
        }

        if (!video_title || video_title.length === 0) {
            next({
                status: 400,
                message: 'A video is missing the title property',
            })
        }

        if (!video_topic || video_topic.length === 0) {
            next({
                status: 400,
                message: 'A video is missing the title property',
            })
        }

        res.locals.videos.push(video)
    })

    next()
}

// Services //
async function create(req, res) {
    const { videos } = res.locals
    const createdVideos = await service.create(videos)
    res.status(201).json(createdVideos)
}

async function read(req, res) {
    const { video } = res.locals
    res.json(video)
}

async function list(req, res) {
    const videos = await service.list()
    res.send(videos)
}

async function remove(req, res) {
    const { video_id } = req.params
    const removedVideo = await service.remove(video_id)
    res.status(200).json(removedVideo)
}

module.exports = {
    create: [validateNewVideos, asyncErrorHandler(create)],
    read: [asyncErrorHandler(checkVideoExists), read],
    list: asyncErrorHandler(list),
    remove: [asyncErrorHandler(checkVideoExists), remove],
}
