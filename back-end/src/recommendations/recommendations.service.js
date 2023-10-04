const knex = require('../db/connection')

function create () {

}

function read () {

}

function update () {

}

function remove (recommendationId) {

}

function list () {
    return knex('embeddings')
        .select('text', 'vector')
        .finally(() => knex.destroy())
}

module.exports = {
    list
}