const service = require('./videosService')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

// Validation //
async function checkVideoExists(req, res, next) {
    const { video_id } = req.params

    const skills = await service.read(video_id)

    let videoIndex = null

    skillIndex = skills.findIndex((skill) => {
        return skill.skill_videos.find((video, i) => {
            if (video.id.videoId === video_id) {
                videoIndex = i
            }
            return video.id.videoId === video_id
        })
    })

    if (videoIndex === null) {
        next({ status: 404, message: `Video with ID ${video_id} not found` })
    } else {
        res.locals.video = skills[skillIndex].skill_videos[videoIndex]
    }

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
