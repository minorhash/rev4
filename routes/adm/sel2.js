var express = require("express")
var router = express.Router()
// == db =============================
var db = require("roblo")
var bod,usr

// === get ============================

var getUsr = function(req, res, next) {

    bod=req.body
    usr=bod.name
    pss=bod.pss

if (bod.mail=="adm@mail.com"
&& bod.pss=="chug"){
usr="d1nesh"
}else {console.log("== no much")}


next()};

var allPre= function(req, res, next) {
try{
allpre=db.allPre()}catch(err){console.log(err)}
next()};


var chk= function(req, res, next) {
    console.log(bod)
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
