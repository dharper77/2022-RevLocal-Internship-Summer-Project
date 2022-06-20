const fs = require('fs')

const data = JSON.parse(fs.readFileSync(`${__dirname}/../data.json`))

exports.getAllProducts = (req, res, next) => {
  res.status(200).json(data)
}

exports.getProduct = (req, res) => {
  const product = data.find(el => el.id == req.params.id)
  res.status(200).json(product)
}
