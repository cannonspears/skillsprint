const router = require("express").Router();
const controller = require("./quizController");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/generate").post(controller.generate).all(methodNotAllowed);
router.route("/").all(methodNotAllowed);

module.exports = router;
