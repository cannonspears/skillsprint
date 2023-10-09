require('dotenv').config()
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
const { fetchUsers } = require('./usersApi')
const weekInMilliseconds = 604800000

async function generateRecommendation (userId) {
    const options = {
        method: 'POST'
    }
    const recommendationUrl = `${API_BASE_URL}/users/${userId}/recommendations`
    const response = await fetch(recommendationUrl, options)
    const data = await response.json()
    return data
}

async function generateForAllUsers () {
    const users = await fetchUsers()
    const userIds = users.map((user) => {
        return user.user_id
    })
    await userIds.forEach((id) => generateRecommendation(id))
}

setInterval(generateForAllUsers, weekInMilliseconds)