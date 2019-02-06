var express = require("express")
var router = express.Router()
// == db =============================
var db = require("roblo")
var ses,bod,usr,mail
var sku,asku=[],skumer=[]

// === get ============================

var getUsr = function(req, res, next) {
ses=req.session
bod=req.body

var emp=require("./js/emp")

if(emp(ses)==true){
console.log("no ses!!!")

if(emp(bod)==true){
console.log("no bod")
usr=null
}else{
console.log("bod!!!")
if(bod.email=="adm@mail.com" && bod.pss=="chug"){
usr="d1nesh"
}
}

}else{
console.log("ses!!!")
usr=ses.usr
}

next()};

var allPre= function(req, res, next) {
try{allpre=db.allPre()
for(var i=0;i<allpre.length;i++){
//console.log(allpre[i].item)
asku.push(allpre[i].item)
}
}
catch(err){console.log(err)}

next()};

var skuMer= function(req, res, next) {
for(var i=0;i<asku.length;i++ ){
skumer[i]=db.skuMer(asku[i])
}

next()};

var chk= function(req, res, next) {
console.log("== sel ==")
console.log(bod)
console.log(ses)
console.log(skumer)
next()};

var gcb = function(req, res) {
var obj = { usr: usr,allpre:allpre,skumer}
res.render("adm", obj);
};

router.get("/adm", [getUsr,allPre,skuMer,
chk, gcb])

module.exports = router
