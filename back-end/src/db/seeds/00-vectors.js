const vectors = require('./00-vectors.json')

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('embeddings')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('embeddings').insert(vectors)
        })
}
