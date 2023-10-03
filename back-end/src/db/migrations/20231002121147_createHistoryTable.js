exports.up = function (knex) {
    return knex.schema.createTable('history', (table) => {
        table.integer('user_id').unsigned()
        table
            .foreign('user_id')
            .references('user_id')
            .inTable('users')
        table.integer('video_id').unsigned()
        table
            .foreign('video_id')
            .references('video_id')
            .inTable('videos')
        table.boolean('video_completed').defaultTo(0)
        table.boolean('user_video_rating').nullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('history')
}
