"use strict";

module.exports = {
  getCompanyList: getCompanyList
}

function getCompanyList(req, res) {
  var list = []
  
  for (var i = 0; i < 10; i++) {
    list[list.length] = {
      name: rndStr(),
      businessCountry: rndStr(),
      naeCode: Math.floor(Math.random() * 1e6)
    }
  }
  
  //tmp :
  list[0].name = "Société Générale";
  list[1].name = "ENGIE";
  list[2].name = "Air France";
  list[3].name = "SNCF";
  list[4].name = "Accord";
  list[5].name = "Peugeot";
  list[6].name = "BNP Paribas"
  list[7].name = "Sanofi"
  list[8].name = "Schneider Electric"
  
  res.json({ companyList: list });
}

function rndStr () {
    return (Math.random() * 1e9|0).toString(36)
}