function dataHas (propertyName = '') {
    return (req, _res, next) => {
        const data = req.body.data
        if (data && data[propertyName]) {
            next()
        } else {
            next({
                status: 400,
                message: `${propertyName} required`
            })
        }
    }
}

function userIdIsNumber () {
    return (req, _res, next) => {
        const { data } = req.body
        if (Number.isInteger(data['user_id'])) {
            next()
        } else {
            next({
                status: 400,
                message: `user_id must be an integer greater than 0`
            })
        }
    }
}

module.exports = {
    dataHas, 
    userIdIsNumber 
}