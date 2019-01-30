var express = require("express")
var router = express.Router()
// == db =============================
var db = require("roblo")
var ses,bod,usr,mail

// === get ============================

var getUsr = function(req, res, next) {
ses=req.session
bod=req.body

if(bod=={}){

console.log("== bod!!!")
console.log(bod)
    flg=bod.flg
    id=bod.rowid
       //try{    }catch{}
}else{
console.log("==no bod")
console.log(bod)
flg=bod.flg
    id=bod.rowid
}


// try{ db.selUsr}

next()};

var clrCoo = function(req, res, next) {
    usr=null;
  req.session = null;
  res.clearCookie('session');
  res.clearCookie('sess');
  res.clearCookie('coo');

  next()};

var upFlg= function(req, res, next) {

try{db.upFlg(flg,id)}catch(err){console.log(err)}

next()};

var chk= function(req, res, next) {
    console.log(bod)
    console.log(ses)
next()};

var gcb = function(req, res) {
var obj = { usr: usr}
res.render("adm/can", obj);
};


router.post("/adm/can", [getUsr,upFlg,
chk, gcb])

module.exports = router
