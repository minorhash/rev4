var express = require("express")
var router = express.Router()
// == db =============================
var db = require("roblo")
var ses,bod,usr,mail

// === get ============================

var getUsr = function(req, res, next) {
ses=req.session
bod=req.body



// try{ db.selUsr}

next()};

var clrCoo = function(req, res, next) {
    usr=null;
  req.session = null;
  res.clearCookie('session');
  res.clearCookie('sess');
  res.clearCookie('coo');

  next()};

var chk= function(req, res, next) {

    console.log(bod)
    if(ses=={}){
    console.log(ses)
    }else{console.log(" ==no sess")}
next()};

var gcb = function(req, res) {
var obj = { usr: usr}
res.render("adm/qr", obj);
};


router.get("/adm/qr", [getUsr,
chk, gcb])

module.exports = router
