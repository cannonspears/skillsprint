const skills = require('./01-skills.json')

exports.seed = function (knex) {
    return knex
        .raw('TRUNCATE TABLE skills RESTART IDENTITY CASCADE')
        .then(() => knex('skills').insert(skills))
}
