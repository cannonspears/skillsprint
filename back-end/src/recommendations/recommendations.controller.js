const service = require('./recommendations.service')
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

async function create (req, res, next) {

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

async function list (req, res, next) {

}

module.exports = {
    create: [
        
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