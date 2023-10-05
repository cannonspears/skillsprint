const skillsData = require('./01-skills.json')
const skills = skillsData.map((skill) => {
    const name = Object.keys(skill)[0]
    const videos = skill[name]
    return {skill_name: name, skill_videos: JSON.stringify(videos)}
})

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex
        .raw("TRUNCATE TABLE skills RESTART IDENTITY CASCADE")
        .then(() => knex("skills").insert(skills))
}
