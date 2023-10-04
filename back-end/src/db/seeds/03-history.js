const history = require('./03-history.json')

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('history')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('history').insert(history)
        })
}
