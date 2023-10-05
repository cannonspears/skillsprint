const skillsData = require('./01-skills.json')
const skills = skillsData.map((skill) => {
    const skill_name = Object.keys(skill)[0]
    const skill_videos = skill[skill_name]
    return {skill_name, skill_videos}
})

exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('skills')
        .raw("TRUNCATE TABLE skills RESTART IDENTITY CASCADE")
        .then(() => knex("skills").insert(skills))
}
