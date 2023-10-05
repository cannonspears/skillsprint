const history = require('./03-history.json')

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('history')
        .raw("TRUNCATE TABLE history RESTART IDENTITY CASCADE")
        .then(() => knex("history").insert(history))
}
