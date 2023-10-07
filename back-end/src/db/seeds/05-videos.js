const videosData = require('./05-videos.json')

const videos = videosData.map((v) => {
    return {
        video_id: v.id.videoId,
        skill_id: v.skill_id,
        title: v.snippet.title,
        description: v.snippet.description,
        duration: v.duration,
        channel: v.snippet.channelTitle,
        thumbnailUrl: v.snippet.thumbnails.default.url,
    }
})

// Double check for duplicate videos, will break everything if there are
for (let i = 0; i < videos.length - 1; i++) {
    for (let j = i + 1; j < videos.length; j++) {
        if (videos[i].video_id === videos[j].video_id) {
            console.log(
                `Match found at ${i}, ${j}, video id: ${videos[i].video_id}`
            )
        }
    }
}

exports.seed = function (knex) {
    return knex
        .raw('TRUNCATE TABLE videos CASCADE')
        .then(() => knex('videos').insert(videos))
}
