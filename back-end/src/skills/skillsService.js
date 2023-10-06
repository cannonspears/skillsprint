const knex = require('../db/connection')

function read(skill_id) {
    return knex('videos')
        .select('*')
        .where({ skill_id })
        .finally(() => knex.destroy())
}

function list() {
    return knex('skills')
        .select('skill_id', 'skill_name')
        .finally(() => knex.destroy())
}

module.exports = { read, list }
