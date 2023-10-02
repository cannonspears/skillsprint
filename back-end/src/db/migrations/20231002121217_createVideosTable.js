exports.up = function (knex) {
    return knex.schema.createTable('videos', (table) => {
        table.uuid('video_id').defaultTo(knex.fn.uuid()).primary()
        table.string('video_title').notNullable()
        table.string('video_url').notNullable()
        table.string('video_topic').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('videos')
}
