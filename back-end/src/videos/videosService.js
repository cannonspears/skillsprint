const knex = require('../db/connection')

function read(video_id) {
    return knex('videos').select('*').where({ video_id }).first()
}

function list() {
    return knex('videos').select('*')
}

module.exports = { read, list }
