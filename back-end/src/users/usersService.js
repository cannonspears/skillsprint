const knex = require('../db/connection')

function create(user) {
    return knex('users')
        .insert(user)
        .returning('*')
        .then((createdRecords) => createdRecords[0])
}

function read(user_id) {
    return knex('users').where({ user_id })
}

function update(user) {
    return knex('users')
        .update(user)
        .where({ user_id: user.user_id })
        .returning('*')
        .then((updatedRecords) => updatedRecords[0])
}

module.exports = { create, read, update }
