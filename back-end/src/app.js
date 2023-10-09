const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '..', '.env') })

const express = require('express')
const cors = require('cors')
const errorHandler = require('./errors/errorHandler')
const notFound = require('./errors/notFound')
const quizRouter = require('./quiz/quizRouter')
const skillsRouter = require('./skills/skillsRouter')
const videosRouter = require('./videos/videosRouter')
const usersRouter = require('./users/usersRouter')
const app = express()

app.use(cors())
app.use(express.json())

app.use('/quizzes', quizRouter)
app.use('/skills', skillsRouter)
app.use('/videos', videosRouter)
app.use('/users', usersRouter)

app.use(notFound)
app.use(errorHandler)

module.exports = app
