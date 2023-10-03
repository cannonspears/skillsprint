const vectors = require('./00-embeddings.json')
vectors.forEach((item) => {
    item.vector = JSON.stringify(item.vector)
})

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('embeddings')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('embeddings').insert(vectors)
        })
}
