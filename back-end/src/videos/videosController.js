const service = require('./videosService')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

// Validation //
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
    const data = await service.create(videos)
    res.status(200).json(data)
}

async function read(req, res) {
    const { video_id } = req.params
    const data = await service.read(video_id)
    res.json(data)
}

async function list(req, res) {
    const data = await service.list()
    res.send(data)
}

module.exports = {
    create: [validateNewVideos, asyncErrorHandler(create)],
    read,
    list: asyncErrorHandler(list),
}
