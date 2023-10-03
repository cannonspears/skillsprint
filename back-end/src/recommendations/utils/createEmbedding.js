require('dotenv').config()
const API_KEY = process.env.OPENAI_API_KEY

async function createEmbedding(textToEmbed) {
    const openAiHeaders = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    }
    const options = {
        method: 'POST',
        headers: openAiHeaders,
        body: JSON.stringify({
            model: 'text-embedding-ada-002',
            input: textToEmbed,
        }),
    }
    const response = await fetch(
        'https://api.openai.com/v1/embeddings',
        options
    )
    const data = await response.json()
    const embeddings = data.data[0].embedding
    return embeddings
}

module.exports = createEmbedding