exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('user_id').primary()
        table.string('user_name').notNullable()
        table.integer('user_age').notNullable()
        table.date('user_dob').notNullable()
        table.integer('user_level').defaultTo(0)
        table.integer('user_points').defaultTo(0)
        table.jsonb('preferred_skills').nullable()
        table.boolean('recommendations_on').defaultTo(1)
        table.boolean('new_user').defaultTo(1)
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}
