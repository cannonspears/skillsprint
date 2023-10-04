exports.up = function (knex) {
    return knex.schema.createTable('recommendations', (table) => {
        table.increments('recommendation_id').primary()
        table.integer('user_id').notNullable()
        table
            .foreign('user_id')
            .references('user_id')
            .inTable('users')
        table.json('videos')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('recommendations')
}