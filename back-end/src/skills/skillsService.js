const knex = require('../db/connection')

function read(skill_id) {
    return knex('videos').select('*').where({ skill_id })
}

function list() {
    return knex('skills').select('skill_id', 'skill_name')
}

module.exports = { read, list }
