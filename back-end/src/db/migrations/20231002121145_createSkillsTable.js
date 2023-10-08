exports.up = function (knex) {
    return knex.schema.createTable('skills', (table) => {
        table.integer('skill_id').primary()
        table.string('skill_name').notNullable()
        table.string('description')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('skills')
}
