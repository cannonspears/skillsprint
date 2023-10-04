const users = require('./02-users.json')

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert(users)
        })
}
