const Router = require("express");
const noteController = require("../controllers/noteController");

const router = new Router();

router.post("/createNote", noteController.createNote);
router.get("/getNotes", noteController.getNotes);

module.exports = router;