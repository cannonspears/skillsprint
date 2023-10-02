exports.up = function (knex) {
    return knex.schema.createTable('embeddings', (table) => {
        table.uuid('embedding_id').defaultTo(knex.fn.uuid()).primary()
        table.string('text').notNullable()
        table.jsonb('vectors_array').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('embeddings')
}
