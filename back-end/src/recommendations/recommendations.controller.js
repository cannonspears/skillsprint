const service = require('./recommendations.service')
const getMostFrequentSkill = require('./utils/getMostFrequentSkill')
const getRecommendedSkills = require('./utils/getRecommendedSkills')
const getVideo = require('./utils/getVideo')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

async function recommendationExists (req, res, next) {
    const recommendationId = Number(req.params.recommendationId)
    const recommendation = await service.read(recommendationId)
    if (recommendation) {
        res.locals.recommendation = recommendation
        next()
    } else {
        next({
            status: 404,
            message: `Recommendation not found - ID: ${recommendationId}`
        })
    }
}

async function create (req, res) {
    const userId = Number(req.params.user_id)
    const mostFrequentSkill = await getMostFrequentSkill(userId)
    const recommendedSkills = await getRecommendedSkills(mostFrequentSkill)
    const videosArray = await Promise.all(recommendedSkills.map((skill) => getVideo(skill)))
    const recommendation = {
        user_id: userId,
        videos: JSON.stringify(videosArray)
    }
    const response = await service.create(recommendation)
    if (response) res.status(200).json({ data: response[0] })
}

function read (_req, res) {
    const { recommendation } = res.locals
    res.json({ data: recommendation })
}

async function remove (_req, res) {
    const { recommendation } = res.locals
    const recommendationId = recommendation.recommendation_id
    await service.remove(recommendationId)
    res.sendStatus(204)
}

async function list (req, res) {
    const user_id = Number(req.params.user_id)
    const response = await service.list(user_id)
    if (response) res.json({ data: response })
}

module.exports = {
    create: [
        asyncErrorHandler(create)
    ],
    read: [
        asyncErrorHandler(recommendationExists),
        read
    ],
    delete: [
        asyncErrorHandler(recommendationExists),
        remove
    ],
    list: [
        asyncErrorHandler(list)
    ]
}