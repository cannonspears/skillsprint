const knex = require('../../db/connection')

// Gets existing embeddings
function listEmbeddings () {
    return knex('embeddings')
        .select('*')
        .finally(() => knex.destroy())
}

// Gets specific user history
function listUserHistory (userId) {
    return knex('history')
        .join('videos', 'history.video_id', 'videos.video_id')
        .select('*')
        .where({ user_id: userId })
        .finally(() => knex.destroy())
}

module.exports = {
    listEmbeddings,
    listUserHistory
}