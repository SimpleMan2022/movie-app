const logRequest = (req, res, next) => {
  console.log(`telah terjadi request pada path : ${req.path} | ${req.method}`)
  next()
}
module.exports = logRequest
