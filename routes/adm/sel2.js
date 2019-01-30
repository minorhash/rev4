var express = require("express")
var router = express.Router()
// == db =============================
var db = require("roblo")
var bod={},ses={},usr

// === get ============================
var getUsr = function(req, res, next) {

var emp=require("./js/emp")

ses=req.session
bod=req.body

if(emp(ses)==false){
console.log("== SES LIVE!!")
console.log(ses.usr)
usr=ses.usr

}else{
console.log("== no ses")

if(bod){
if(bod.mail=="adm@mail.com" && bod.pss=="chug"){
console.log("== MATCH!!! ")
usr="d1nesh"
ses.usr=usr
}else{
console.log("== no mat")
}
}else{console.log("no bod")}

}
next()};

var allPre= function(req, res, next) {
try{allpre=db.allPre()}
catch(err){console.log(err)}
next()};

var chk= function(req, res, next) {
console.log("=== sel2 ===")
console.log(bod)
console.log(req.body)
console.log(ses)
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
