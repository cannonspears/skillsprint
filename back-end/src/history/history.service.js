const knex = require('../db/connection')

function create(history) {
    return knex('history')
        .insert(history)
        .returning('*')
        .finally(() => knex.destroy())
}

function read(historyId) {
    return knex('history')
        .join('users', 'history.user_id', 'users.user_id')
        .join('skills', 'history.video_id', 'skills.skill_videosvideo_id')
        .select('*')
        .where({ history_id: historyId })
        .first()
        .finally(() => knex.destroy())
}

function update(updatedHistory) {
    return knex('history')
        .where({ history_id: updatedHistory.history_id })
        .update(updatedHistory, '*')
        .returning('*')
        .finally(() => knex.destroy())
}

function remove(historyId) {
    return knex('history')
        .where({ history_id: historyId })
        .del()
        .finally(() => knex.destroy())
}

function list(user_id) {
    return knex('history as h')
        .join('users as u', 'h.user_id', 'u.user_id')
        .join('videos as v', 'h.video_id', 'v.video_id')
        .select(
            'v.video_id',
            'v.video_title',
            'v.video_topic',
            'h.video_completed'
        )
        .where('u.user_id', user_id)
        .finally(() => knex.destroy())
}

module.exports = {
    create,
    read,
    update,
    remove,
    list,
}
