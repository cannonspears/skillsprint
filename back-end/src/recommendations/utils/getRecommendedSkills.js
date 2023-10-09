require('dotenv').config()
const API_KEY = process.env.OPENAI_API_KEY
const { OpenAI } = require('openai')
const openai = new OpenAI({ apiKey: API_KEY })

async function getRecommendedSkills (skill) {
    const completion = await openai.chat.completions.create({
        messages: [{ role: 'system', content: `Give me three skills similar to ${skill}. No skill description is needed.` }],
        model: 'gpt-3.5-turbo',
    })
    const response = completion.choices[0].message.content
    const skills = response.split('\n').map((item) => item.replace(/^\d+\.\s*/, ''))
    return skills
}

module.exports = getRecommendedSkills
