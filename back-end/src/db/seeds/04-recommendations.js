const recommendations = require('./04-recommendations.json')
recommendations.forEach((item) => {
    item.videos = JSON.stringify(item.videos)
})

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('recommendations')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('recommendations').insert(recommendations)
        })
}
