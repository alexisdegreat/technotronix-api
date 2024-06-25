const express = require("express")
const categoryController = require("../controllers/categoryController")

const router = express.Router()

 router.post("/", categoryController.createcategory)
 router.get("/", categoryController.getAllCategorys)
 router.get("/:id", categoryController.getSingleCategory)
 router.put("/:id", categoryController.updateCategory)
 router.delete("/:id", categoryController.deleteCategory)

module.exports = router

 module.exports = router