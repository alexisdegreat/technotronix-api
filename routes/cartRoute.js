const express = require("express")
const cartController = require("../controllers/cartController")
const {auth} = require("../middleware/auth")

const router = express.Router()

router.post("/addToCart", auth, cartController.addToCart)
router.get("/Cart", auth, cartController.getCart)