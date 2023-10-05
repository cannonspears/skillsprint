const recommendations = require('./04-recommendations.json')
recommendations.forEach((item) => {
    item.videos = JSON.stringify(item.videos)
})

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex
        .raw("TRUNCATE TABLE recommendations RESTART IDENTITY CASCADE")
        .then(() => knex("recommendations").insert(recommendations))
}
