const service = require('./quizService')

function validateTranscript(req, res, next) {
    console.log(req.body)

    if (!req.body.data) {
        next({
            status: 400,
            message: 'Transcript is missing!',
        })
    }

    next()
}

async function generate(req, res) {
    const questions = await service.generate(req.body.data)

    res.status(200).json(questions)
}

module.exports = {
    generate: [validateTranscript, generate],
}
