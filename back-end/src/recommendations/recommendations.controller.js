const service = require('./recommendations.service')
const createEmbedding = require('./createEmbedding')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

async function search (searchTerm) {
    const embedding = await createEmbedding(searchTerm)
    const response = await service.search(embedding)
    console.log(response)
}

search ('Self Help')
