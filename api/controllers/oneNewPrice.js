
"use strict";

module.exports = {
  getOneNewPrice: getOneNewPrice
}

function getOneNewPrice(req, res) {
  var amount = Math.random() * 100
  res.json(amount);
}