const service = require('./usersService')

// Validation //
async function validateNewOrUpdatedUser(req, res, next) {
    const { user_name, user_age, user_dob } = req.body

    if (!user_name || !user_name.length) {
        next({ status: 400, message: 'Name field is empty or missing' })
    }

    if (!user_age || user_age < 18 || user_age > 100) {
        next({ status: 400, message: 'Age field is missing or invalid' })
    }

    if (!user_dob || !user_dob.length) {
        next({ status: 400, message: 'DoB field is empty or missing' })
    }

    res.locals.user = { user_name, user_age, user_dob }

    next()
}

async function validateUserId(req, res, next) {
    const { userId } = req.params
    const user = await service.read(userId)

    if (!user) {
        next({
            status: 404,
            message: `User ID ${userId} does not exist!`,
        })
    }

    res.locals.user = user

    next()
}

// Services //
async function create(req, res) {
    const { user } = res.locals
    const data = await service.create(user)
    res.status(200).json(data)
}

async function read(req, res) {
    const data = res.locals.user
    res.json(data)
}

async function update(req, res) {
    const { user } = res.locals
    user.user_id = req.params.userId
    const data = await service.update(user)
    res.status(200).json(data)
}

module.exports = {
    create: [validateNewOrUpdatedUser, create],
    read: [validateUserId, read],
    update: [validateNewOrUpdatedUser, update],
}
