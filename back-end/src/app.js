const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const historyRouter = require('./history/history.router')
const recommendationsRouter = require('./recommendations/recommendations.router')
const quizRouter = require("./quiz/quizRouter");
const usersRouter = require("./users/usersRouter");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/quizzes", quizRouter);

app.use("/users", usersRouter);
app.use('/history', historyRouter)
app.use('/recommendations', recommendationsRouter)

app.use(notFound);
app.use(errorHandler);

module.exports = app;
