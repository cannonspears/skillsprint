const historyService = require('../../history/history.service')
const skillService = require('../../skills/skillsService')

async function getMostFrequentSkill (user_id) {
    const skills_with_count = {}
    const history = await historyService.list(user_id)
    history.forEach((item) => {
        const { skill_id } = item
        if (!skills_with_count[skill_id]) {
            skills_with_count[skill_id] = 1
        } else {
            skills_with_count[skill_id]++
        }
    })
    const skills = Object
        .entries(skills_with_count)
        .map(([skill_id, count]) => ({
            skill_id: parseInt(skill_id),
            count
        }))
        .sort((a, b) => b.count - a.count)
    const skill = await skillService.readSkillName(skills[0].skill_id)
    return skill['skill_name']
}

module.exports = getMostFrequentSkill