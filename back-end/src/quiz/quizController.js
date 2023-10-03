const service = require("./quizService");

function validateTranscript(req, res, next) {
  if (!req.body.transcript) {
    next({
      status: 400,
      message: "Transcript is missing!",
    });
  }

  next();
}

async function generate(req, res) {
  const data = await service.generate(req.body.transcript);

  res.status(200).json(data);
}

module.exports = {
  generate: [validateTranscript, generate],
};
