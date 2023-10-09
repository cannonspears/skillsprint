const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5001'

//Fetchs the most recent recommendation for a user
async function getRecommendation (userId) {
    const options = {
        method: 'GET'
    }
    const recommendationUrl = `${API_BASE_URL}/users/${userId}/recommendations`
    const response = await fetch(recommendationUrl, options)
    const data = await response.json()
    console.log(data.data[0])
    return data
}

module.exports = getRecommendation