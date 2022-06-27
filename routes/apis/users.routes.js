const express = require("express");
const {usersController }= require("../../controllers");
// const { route } = require("./users.rout");

const router = express.Router();

router.get("/",usersController.getAllUsers);
router.post("/",usersController.createUser);
router.get("/:userId", usersController.getUserById);
router.put("/:userId",usersController.updateUser);
router.delete("/:userId", usersController.deleteUser);


module.exports = router;