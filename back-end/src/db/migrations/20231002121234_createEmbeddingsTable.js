exports.up = function (knex) {
    return knex.schema.createTable('embeddings', (table) => {
        table.increments('embedding_id').primary()
        table.string('text').notNullable()
        table.json('vectors_array').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('embeddings')
}
