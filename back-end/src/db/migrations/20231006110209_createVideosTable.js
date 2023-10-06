exports.up = function (knex) {
    return knex.schema.createTable('videos', (table) => {
        table.string('video_id').primary()
        table.integer('skill_id').unsigned()
        table.foreign('skill_id').references('skill_id').inTable('skills')
        table.string('title')
        table.string('description')
        table.string('channel')
        table.string('thumbnailUrl')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('videos')
}
