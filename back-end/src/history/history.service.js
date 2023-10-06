const knex = require('../db/connection')

function create(history) {
    return knex('history')
        .insert(history)
        .returning('*')
        .then((createdRecords) => createdRecords[0])
        .finally(() => knex.destroy())
}

function read(history_id) {
    return knex('history as h')
        .join('videos as v', 'h.video_id', 'v.video_id')
        .select(
            'h.history_id',
            'v.video_id',
            'v.title',
            'v.skill_id',
            'h.video_completed'
        )
        .where({ history_id })
        .first()
        .finally(() => knex.destroy())
}

function list(user_id) {
    return knex('history as h')
        .join('videos as v', 'h.video_id', 'v.video_id')
        .select(
            'h.history_id',
            'v.video_id',
            'v.title',
            'v.skill_id',
            'h.video_completed'
        )
        .where('u.user_id', user_id)
        .finally(() => knex.destroy())
}

function update(updatedHistory) {
    return knex('history')
        .where({ history_id: updatedHistory.history_id })
        .update(updatedHistory, '*')
        .returning('*')
        .finally(() => knex.destroy())
}

function remove(history_id) {
    return knex('history')
        .where({ history_id })
        .del()
        .finally(() => knex.destroy())
}

module.exports = {
    create,
    read,
    list,
    update,
    remove,
}
