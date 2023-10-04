const service = require('./utilities.service')
const cosineSimilarity = require('./cosineSimilarity')
const createEmbedding = require('./createEmbedding')

async function getFiveSimilarTopics (topic) {
    const embedding = await createEmbedding(topic)
    const response = await service.listEmbeddings()
    const similarities = response.map((item) => {
        const similarity = cosineSimilarity(embedding, item.vector)
        return { text: item.text, similarity }
    })
    const results = similarities.sort((a, b) => b.similarity - a.similarity).slice(0, 5)
    return results
}

module.exports = getFiveSimilarTopics