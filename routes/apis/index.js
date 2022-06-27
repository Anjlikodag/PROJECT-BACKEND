const express = require("express");
const router = express.Router();

const userRouter= require("./users.routes");
const authsRouter = require("./auth.routes");
const  registerRouter = require("./routes.register");
const productsRouter = require("./products.routes");


router.use("/products",productsRouter);
router.use("/users", userRouter);
router.use("/users/login", authsRouter);
router.use("/users/register", registerRouter);

module.exports = router;