const knex = require('../db/connection')
const cosineSimilarity = require('./cosineSimilarity')

function search (embedding) {
    const targetVectors = embedding
    return knex('embeddings')
        .select('text', 'vectors_array')
        .limit(5)
        .finally(() => knex.destroy())
}

module.exports = {
    search
}