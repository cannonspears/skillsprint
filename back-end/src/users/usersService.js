const knex = require('../db/connection')

function create(user) {
    return knex('users')
        .insert(user)
        .returning('*')
        .then((createdRecords) => createdRecords[0])
}

function list() {
    return knex('users').select('*')
}

function read(user_id) {
    return knex('users').where({ user_id }).first()
}

function update(user) {
    const { user_id } = user

    return knex('users')
        .update(user)
        .where({ user_id })
        .returning('*')
        .then((updatedRecords) => updatedRecords[0])
}

// Note: This method returns an integer represented the
// number of rows deleted. So, successful = 1.
// The transaction stuff is to delete from multiple tables at once
// where the tables rely on the foreign key, "user_id"
function remove(user_id) {
    return knex.transaction(function (trx) {
        return trx('history')
            .where({ user_id })
            .del()
            .then(() => {
                return trx('recommendations')
                    .where({ user_id })
                    .del()
                    .then(() => {
                        return trx('users').where({ user_id }).del()
                    })
            })
    })
}

module.exports = { create, list, read, update, remove }
