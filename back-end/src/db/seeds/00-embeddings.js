const embeddings = require('./00-embeddings.json')
embeddings.forEach((item) => {
    item.vector = JSON.stringify(item.vector)
})

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('embeddings')
        .raw("TRUNCATE TABLE embeddings RESTART IDENTITY CASCADE")
        .then(() => knex("embeddings").insert(embeddings))
}
