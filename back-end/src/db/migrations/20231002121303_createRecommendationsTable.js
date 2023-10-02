exports.up = function (knex) {
    return knex.schema.createTable('recommendations', (table) => {
        table.uuid('user_id').notNullable()
        table
            .foreign('user_id')
            .references('user_id')
            .inTable('users')
        table.uuid('video_id').notNullable()
        table
            .foreign('video_id')
            .references('video_id')
            .inTable('videos')
        table.uuid('embedding_id').notNullable()
        table
            .foreign('embedding_id')
            .references('embedding_id')
            .inTable('embeddings')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('recommendations')
}