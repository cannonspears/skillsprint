exports.up = function (knex) {
    return knex.schema.createTable('videos', (table) => {
        table.string('video_id').primary()
        table.string('video_title').notNullable()
        table.string('video_topic').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('videos')
}
