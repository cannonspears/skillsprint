const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001'

//Fetchs the most recent recommendation for a user
async function getRecommendation (userId) {
    const options = {
        method: 'GET'
    }
    const recommendationUrl = `${API_BASE_URL}/users/${userId}/recommendations`
    const response = await fetch(recommendationUrl, options)
    const data = await response.json()
    return data[0]
}

module.exports = getRecommendation