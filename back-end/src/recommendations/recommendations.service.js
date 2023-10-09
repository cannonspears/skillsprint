const knex = require('../db/connection')

function create(recommendation) {
    return knex('recommendations').insert(recommendation).returning('*')
}

function read(recommendationId) {
    return knex('recommendations as r')
        .join('users as u', 'r.user_id', 'u.user_id')
        .select('r.recommendation_id', 'u.user_name', 'r.videos', 'r.created_at')
        .where({ recommendation_id: recommendationId })
        .first()
}

function remove(recommendationId) {
    return knex('recommendations')
        .where({ recommendation_id: recommendationId })
        .del()
}

function list(userId) {
    return knex('recommendations as r')
        .join('users as u', 'r.user_id', 'u.user_id')
        .select('u.user_name', 'r.videos', 'r.created_at')
        .where('r.user_id', userId)
        .orderBy('r.created_at', 'desc')
}

module.exports = {
    create,
    read,
    remove,
    list,
}
