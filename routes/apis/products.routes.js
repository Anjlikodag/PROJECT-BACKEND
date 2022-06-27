const express = require("express");

const { productscontroller } = require("../../controllers");
const { authMiddleware } =require("../../middlewares/auth.middleware");
const router = express.Router();

router.get("/",authMiddleware, productscontroller.getAllProducts); 
router.get("/:productId", authMiddleware,productscontroller.getProductById);
router.post("/", authMiddleware, productscontroller.createProduct);
router.put("/:productId", authMiddleware, productscontroller.updateProduct);
router.delete("/:productId", authMiddleware, productscontroller.deleteProduct);


module.exports = router;