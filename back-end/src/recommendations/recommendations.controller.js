const service = require('./recommendations.service')
const createEmbedding = require('./utils/createEmbedding')
const cosineSimilarity = require('./utils/cosineSimilarity')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

async function search (searchTerm) {
    const embedding = await createEmbedding(searchTerm)
    const response = await service.list()
    const similarities = response.map((item) => {
        const similarity = cosineSimilarity(embedding, item.vector)
        return { text: item.text, similarity }
    })
    const results = similarities.sort((a, b) => b.similarity - a.similarity).slice(0, 5)
    return results
}

module.exports = {
    search: [asyncErrorHandler(search)]
}