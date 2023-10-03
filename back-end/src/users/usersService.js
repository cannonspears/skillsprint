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
    const { user_id, user_name, user_age, user_dob } = user

    return knex('users')
        .update({ user_name, user_age, user_dob })
        .where({ user_id })
        .returning('*')
        .then((updatedRecords) => updatedRecords[0])
}

module.exports = { create, read, update }
