exports.up = function (knex) {
    return knex.schema.createTable('recommendations', (table) => {
        table.integer('user_id').notNullable()
        table
            .foreign('user_id')
            .references('user_id')
            .inTable('users')
        table.string('video_id').notNullable()
        table
            .foreign('video_id')
            .references('video_id')
            .inTable('videos')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('recommendations')
}