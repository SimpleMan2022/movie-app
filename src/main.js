const express = require("express")
const app = express()
const port = 3000
const movieRouters = require("./routers/movieRouters")
const logRequest = require("./middleware/logs")

app.use(logRequest)
app.use("/", movieRouters)

app.listen(port, () => {
  console.log("Server is running on port 3000")
})
