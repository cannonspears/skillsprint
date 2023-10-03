function cosineSimilarity (targetArray, existingArray) {
    if (targetArray.length !== existingArray.length) throw new Error('Vector arrays must have the same length')
    let dotProduct = 0
    let magnitudeA = 0
    let magnitudeB = 0
    for (let i = 0; i < targetArray.length; i++) {
        const vectorA = targetArray[i]
        const vectorB = existingArray[i]
        dotProduct += vectorA * vectorB
        magnitudeA += vectorA * vectorA
        magnitudeB += vectorB * vectorB
        magnitudeA = Math.sqrt(magnitudeA)
        magnitudeB = Math.sqrt(magnitudeB)
    }
    if (magnitudeA === 0 || magnitudeB === 0) return 0
    const similarity = dotProduct / (magnitudeA * magnitudeB)
    return similarity
}

module.exports = cosineSimilarity