const knex = require('../../db/connection')

// Gets existing embeddings
function listEmbeddings () {
    return knex('embeddings')
        .select('*')
        .finally(() => knex.destroy())
}

// Gets specific user history
function listUserHistory (user_id) {
    return knex('history')
        .join('users', 'recommendations.user_id', 'users.user_id')
        .join('videos', 'recommendations.video_id', 'videos.video_id')
        .select('*')
        .where({ user_id: user_id })
        .orderBy('created_at', 'desc')
        .finally(() => knex.destroy())
}

module.exports = {
    listEmbeddings,
    listUserHistory
}