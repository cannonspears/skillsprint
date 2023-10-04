const service = require('./usersService')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

// Validation //
async function validateNewUser(req, res, next) {
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

    res.locals.newUser = { user_name, user_age, user_dob }

    next()
}

async function validateUpdatedUser(req, res, next) {
    const { user_name, user_age, user_dob, user_level, user_points } = req.body

    if (!user_name || !user_name.length) {
        next({ status: 400, message: 'Name field is empty or missing' })
    }

    if (!user_age || user_age < 18 || user_age > 100) {
        next({ status: 400, message: 'Age field is missing or invalid' })
    }

    if (!user_dob || !user_dob.length) {
        next({ status: 400, message: 'DoB field is empty or missing' })
    }

    if (user_level === null || user_level === undefined || user_level < 0) {
        next({ status: 400, message: 'Level field is missing or invalid' })
    }

    if (user_points === null || user_level === undefined || user_points < 0) {
        next({ status: 400, message: 'Points field is missing or invalid' })
    }

    res.locals.updatedUser = {
        user_name,
        user_age,
        user_dob,
        user_level,
        user_points,
    }

    next()
}

async function validateUserId(req, res, next) {
    const { user_id } = req.params

    if (isNaN(parseInt(user_id))) {
        next({ status: 400, message: `ID ${user_id} is not a valid integer` })
    }

    const user = await service.read(user_id)

    if (!user) {
        next({
            status: 404,
            message: `User with ID ${user_id} does not exist!`,
        })
    }

    res.locals.user = user

    next()
}

// Services //
async function create(req, res) {
    const { newUser } = res.locals
    const data = await service.create(newUser)
    res.status(200).json(data)
}

async function list(req, res) {
    const data = await service.list()
    res.json(data)
}

async function read(req, res) {
    const data = res.locals.user
    res.json(data)
}

async function update(req, res) {
    const { user_id } = req.params
    const { updatedUser } = res.locals
    updatedUser.user_id = user_id
    const data = await service.update(updatedUser)
    res.status(200).json(data)
}

async function remove(req, res) {
    const { user_id } = req.params
    const data = await service.remove(user_id)
    res.status(200).json(data)
}

module.exports = {
    create: [validateNewUser, asyncErrorHandler(create)],
    list: asyncErrorHandler(list),
    read: [asyncErrorHandler(validateUserId), read],
    update: [
        validateUpdatedUser,
        asyncErrorHandler(validateUserId),
        asyncErrorHandler(update),
    ],
    remove: [asyncErrorHandler(validateUserId), asyncErrorHandler(remove)],
    userExists: [
        validateUserId
    ]
}
