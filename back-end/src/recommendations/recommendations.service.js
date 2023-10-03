const knex = require('../db/connection')

function list () {
    return knex('embeddings')
        .select('text', 'vector')
        .finally(() => knex.destroy())
}

module.exports = {
    list
}