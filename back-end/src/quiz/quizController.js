import asyncErrorHandler from "../errors/asyncErrorHandler";

const service = require("./quizService");

function validateTranscript(req, res, next) {
  if (!req.body) {
    next({
      status: 400,
      message: "Transcript is missing!",
    });
  }

  return next();
}

async function generate(req, res, next) {
  const data = await service.generate(req.body);

  res.status(200).json({ data });
}

module.exports = {
  generate: [validateTranscript, asyncErrorHandler(generate)],
};
