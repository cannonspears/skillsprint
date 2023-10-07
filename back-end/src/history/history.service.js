const knex = require('../db/connection')

function create(history) {
    return knex('history')
        .insert(history)
        .returning('*')
        .then((createdRecords) => createdRecords[0])
}

function read(history_id) {
    return knex('history as h')
        .join('videos as v', 'h.video_id', 'v.video_id')
        .select('h.history_id', 'h.user_id', 'v.video_id', 'h.video_completed')
        .where({ history_id })
        .first()
}

function list(user_id) {
    return knex('users as u')
        .join('history as h', 'h.user_id', 'u.user_id')
        .join('videos as v', 'h.video_id', 'v.video_id')
        .select(
            'h.history_id',
            'u.user_id',
            'v.video_id',
            'v.title',
            'v.skill_id',
            'h.video_completed'
        )
        .where('u.user_id', user_id)
}

function update(updatedHistory) {
    return knex('history')
        .update(updatedHistory)
        .where({ history_id: updatedHistory.history_id })
        .returning('*')
}

function remove(history_id) {
    return knex('history').where({ history_id }).del()
}

module.exports = {
    create,
    read,
    list,
    update,
    remove,
}
