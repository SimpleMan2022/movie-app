const express = require("express")
const axios = require("axios")
const router = express.Router()

const routes = router.get("/movie", async (req, res) => {
  try {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=f745cfed122db7e3bc4af0396936674b"
    const response = await axios.get(url)
    const data = response.data
    res.send(data)
  } catch (error) {
    console.log(error)
  }
})

module.exports = routes
