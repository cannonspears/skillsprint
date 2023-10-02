exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.uuid('user_id').defaultTo(knex.fn.uuid()).primary()
        table.string('user_name').notNullable()
        table.int('user_age').notNullable()
        table.date('user_dob').notNullable()
        table.int('user_level').defaultTo(0)
        table.int('user_points').defaultTo(0)
        table.jsonb('preferred_skills').nullable()
        table.boolean('recommendations_on').defaultTo(1)
        table.boolean('new_user').defaultTo(1)
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users')
}
