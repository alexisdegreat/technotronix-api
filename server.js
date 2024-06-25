const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const categoryRoute = require("./routes/categoryRoute")
const productRoute = require("./routes/productRoute")
const authRoute = require("./routes/authRoute")

connectDB()
const app = express()

app.use(cors({
    origin: "http://localhost:5173",
    allowedHeaders:["Content-Type", "Authorization"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]

}))

app.use(express.json())
app.use("/api/category", categoryRoute)
app.use("/api/product", productRoute)
app.use("/api/uploads",express.static("uploads"))
app.use("/", authRoute)

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`you are listening on port ${port}`))