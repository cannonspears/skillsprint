exports.up = function (knex) {
    return knex.schema.createTable('skills', (table) => {
        table.increments('skill_id').primary()
        table.string('skill_name').notNullable()
        table.json('skill_videos').notNullable()
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('skills')
}