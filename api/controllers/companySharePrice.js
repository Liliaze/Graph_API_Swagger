"use strict";

module.exports = {
  getCompanySharePrice: getCompanySharePrice
}

function getCompanySharePrice(req, res) {
  var list = []
  var date = new Date(req.swagger.params.date.value)
  var amountTest = Math.random() * 100
  var test = 0
  
  for (var i = 0; i < 24; i++) {
    test = Math.random() * 100
    console.log(test&1)
    if ((test & 1) == 0)
      amountTest += amountTest * 15 / 100;
    else
      amountTest -= amountTest * 15 / 100;
     
    list[list.length] = {
      time: new Date( date - (24 * 3600 * 1000) + i * (3600 * 1000) ),
      amount: amountTest
    }
  }

  res.json({ sharePrices: list });
}