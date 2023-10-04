const knex = require('../db/connection')

function create(videos) {
    return knex('videos')
        .insert(videos)
        .returning('*')
        .then((createdRecords) => createdRecords)
}

function read(video_id) {
    return knex('videos').select('*').where({ video_id }).first()
}

function list() {
    return knex('videos').select('*')
}

function remove(video_id) {
    return knex('videos').where({ video_id }).del()
}

module.exports = { create, read, list, remove }
