const videos = require('./01-videos.json')

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('videos')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('videos').insert(videos)
        })
}
