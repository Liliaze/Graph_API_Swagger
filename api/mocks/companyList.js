"use strict";

module.exports = {
  getCompanyList: getCompanyList
}

function getCompanyList(req, res) {
  var list = []

  for (var i = 0; i < 16; i++) {
    list[list.length] = {
      name: rndStr(),
      businessCountry: rndStr(),
      naeCode: Math.floor(Math.random() * 1e6)
    }
  }

  res.json({ companyList: list });
}

function rndStr () {
    return (Math.random() * 1e9|0).toString(36)
}