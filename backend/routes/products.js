const { Router} = require("express");
const controllers = require("../controllers/products");
const restrict = require("../helpers/restrict");

const router = Router();

//Routes

router.get("/", controllers.getProducts);
router.get("/:id", controllers.getProduct);
router.post("/", restrict, controllers.createProduct);
router.put("/:id", restrict, controllers.updateProduct);
router.delete("/:id", restrict, controllers.updateProduct);

module.exports = router;