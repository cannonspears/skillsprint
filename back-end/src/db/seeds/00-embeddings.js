const vectors = require('./00-embeddings.json')
vectors.forEach((item) => {
    item.vectors_array = JSON.stringify(item.vectors_array)
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
