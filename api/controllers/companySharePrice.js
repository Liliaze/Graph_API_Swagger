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
    test = (Math.random() * 100) % 3
    if (test < 0.6)
      amountTest += amountTest * 15 / 100;
    else if (test < 1.2)
      amountTest += amountTest * 7 / 100;
    else if (test < 1.8)
      amountTest -= amountTest * 7 / 100;
    else if (test < 2.5)
      amountTest -= amountTest * 15 / 100;
    else
      amountTest = amountTest;
     
    list[list.length] = {
      time: new Date( date - (24 * 3600 * 1000) + i * (3600 * 1000) ),
      amount: amountTest
    }
  }

  res.json({ sharePrices: list });
}