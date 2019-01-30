var express = require("express")
var router = express.Router()
// == db =============================
var db = require("roblo")
var bod,usr,ses

// === get ============================
var getUsr = function(req, res, next) {

ses=req.session

    bod=req.body
    usr=bod.name
    pss=bod.pss

if (bod.mail=="adm@mail.com"
&& bod.pss=="chug"){
usr="d1nesh"
ses.usr=usr
}else {console.log("== no match")}


next()};

var allPre= function(req, res, next) {
try{
allpre=db.allPre()}catch(err){console.log(err)}
next()};


var chk= function(req, res, next) {
console.log(bod)
console.log(ses.usr)
console.log(allpre)
next()};

var gcb = function(req, res) {
var obj = { usr: usr,
allpre:allpre
}
    res.render("adm/sel2", obj);
};


router.post("/adm/sel2", [getUsr,allPre,
chk, gcb])

module.exports = router
