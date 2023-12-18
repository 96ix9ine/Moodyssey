const Router = require("express");
const userController = require("../controllers/userController");

const router = new Router();

router.post("/createUser", userController.createUser);
router.get("/getUsers", userController.getUsers);

module.exports = router;