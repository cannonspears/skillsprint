const knex = require('../db/connection')

function create (recommendation) {
    return knex('recommendations')
        .insert(recommendation)
        .returning('*')
        .finally(() => knex.destroy())
}

function read (recommendationId) {
    return knex('recommendations')
        .join('users', 'recommendations.user_id', 'users.user_id')
        .join('videos', 'recommendations.video_id', 'videos.video_id')
        .select('*')
        .where({ recommendation_id: recommendationId})
        .first()
        .finally(() => knex.destroy())
}

function remove (recommendationId) {
    return knex('recommendations')
        .where({ recommendation_id: recommendationId })
        .del()
        .finally(() => knex.destroy())
}

function list (user_id) {
    return knex('recommendations')
        .join('users', 'recommendations.user_id', 'users.user_id')
        .join('videos', 'recommendations.video_id', 'videos.video_id')
        .select('*')
        .where({user_id: user_id})
        .finally(() => knex.destroy())
}

module.exports = {
    create,
    read,
    remove,
    list
}