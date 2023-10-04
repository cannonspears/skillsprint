const knex = require('../db/connection')

function create (history) {
    return knex('history')
        .insert(history)
        .returning('*')
        .finally(() => knex.destroy())
}

function read (historyId) {
    return knex('history')
        .join('users', 'history.user_id', 'users.user_id')
        .join('videos', 'history.video_id', 'videos.video_id')
        .select('*')
        .where({ history_id: historyId })
        .first()
        .finally(() => knex.destroy())
}

function update (updatedHistory) {
    return knex('history')
        .where({ history_id: updatedHistory.history_id })
        .update(updatedHistory, '*')
        .returning('*')
        .finally(() => knex.destroy())
}

function remove (historyId) {
    return knex('history')
        .where({ history_id: historyId })
        .del()
        .finally(() => knex.destroy())
}

function list () {
    return knex('history')
        .join('users', 'history.user_id', 'users.user_id')
        .join('videos', 'history.video_id', 'videos.video_id')
        .select('*')
        .finally(() => knex.destroy())
}

module.exports = {
    create,
    read,
    update,
    remove,
    list
}