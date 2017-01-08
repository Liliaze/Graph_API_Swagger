"use strict";

module.exports = {
  getCompanySharePrice: getCompanySharePrice
}

function getCompanySharePrice(req, res) {
  var list = []
  var date = new Date(req.swagger.params.date.value)

  for (var i = 0; i < 24; i++) {
    list[list.length] = {
      time: new Date( date - (24 * 3600 * 1000) + i * (3600 * 1000) ),
      amount: Math.random() * 100
    }
  }

  res.json({ sharePrices: list });
}