const knex = require('../db/connection')

function create(recommendation) {
    return knex('recommendations').insert(recommendation).returning('*')
}

function read(recommendationId) {
    return knex('recommendations')
        .join('users', 'recommendations.user_id', 'users.user_id')
        .join('videos', 'recommendations.video_id', 'videos.video_id')
        .select('*')
        .where({ recommendation_id: recommendationId })
        .first()
}

function remove(recommendationId) {
    return knex('recommendations')
        .where({ recommendation_id: recommendationId })
        .del()
}

function list(user_id) {
    return knex('recommendations')
        .join('users', 'recommendations.user_id', 'users.user_id')
        .join('videos', 'recommendations.video_id', 'videos.video_id')
        .select('*')
        .where({ user_id: user_id })
}

module.exports = {
    create,
    read,
    remove,
    list,
}
