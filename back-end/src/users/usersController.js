const service = require('./usersService')

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
    console.log(req.body)

    const {
        user_name,
        user_age,
        user_dob,
        user_level,
        user_points,
        preferred_skills,
        recommendations_on,
        new_user,
    } = req.body

    if (!user_name || !user_name.length) {
        next({ status: 400, message: 'Name field is empty or missing' })
    }

    if (!user_age || user_age < 18 || user_age > 100) {
        next({ status: 400, message: 'Age field is missing or invalid' })
    }

    if (!user_dob || !user_dob.length) {
        next({ status: 400, message: 'DoB field is empty or missing' })
    }

    if (!user_level || user_level < 0) {
        next({ status: 400, message: 'Level field is missing or invalid' })
    }

    if (!user_points || user_points < 0) {
        next({ status: 400, message: 'Points field is missing or invalid' })
    }

    if (!preferred_skills) {
        next({ status: 400, message: 'Preferred skills field is missing' })
    }

    if (recommendations_on === null || recommendations_on === undefined) {
        next({ status: 400, message: 'Recommendations field is missing' })
    }

    if (new_user === null || new_user === undefined) {
        next({ status: 400, message: 'New user field is missing' })
    }

    res.locals.updatedUser = {
        user_name,
        user_age,
        user_dob,
        user_level,
        user_points,
        preferred_skills,
        recommendations_on,
        new_user,
    }

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
    const { newUser } = res.locals
    const data = await service.create(newUser)
    res.status(200).json(data)
}

async function read(req, res) {
    const { user } = res.locals
    res.json(user)
}

async function update(req, res) {
    const { updatedUser } = res.locals
    updatedUser.user_id = req.params.userId
    const data = await service.update(updatedUser)
    res.status(200).json(data)
}

module.exports = {
    create: [validateNewUser, create],
    read: [validateUserId, read],
    update: [validateUpdatedUser, validateUserId, update],
}
