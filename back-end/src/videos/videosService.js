const knex = require('../db/connection')

function create(videos) {
    return knex('videos')
        .insert(videos)
        .returning('*')
        .then((createdRecords) => createdRecords)
}

function read(video_id) {
    return knex('videos').select('*').where({ video_id })
}

function list() {
    return knex('videos').select('*')
}

module.exports = { create, read, list }
