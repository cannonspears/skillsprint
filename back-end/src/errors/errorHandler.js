/**
 * Express API error handler.
 */
function errorHandler(error, request, response, next) {
    const { status = 500, message = 'Something went wrong!' } = error
    console.log(`Error code ${status}: ${message}`)
    response.status(status).json({ error: message })
}

module.exports = errorHandler
