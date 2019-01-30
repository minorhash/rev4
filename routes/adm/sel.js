var express = require("express")
var router = express.Router()
// == db =============================
var db = require("roblo")
var ses,bod,usr,mail

// === get ============================

var getUsr = function(req, res, next) {
ses=req.session
bod=req.body

if(ses){
usr=ses.usr
}else{
console.log("ses!!!")}

if(bod!=={}){
console.log("no bod")
}else{
console.log("bod!!!")}

// try{ db.selUsr}

next()};

var allPre= function(req, res, next) {
try{
allpre=db.allPre()}catch(err){console.log(err)}
next()};

var chk= function(req, res, next) {
    console.log("== bod")
    console.log(bod)
    console.log(ses)
    console.log(usr)
    console.log(allpre)
next()};

var gcb = function(req, res) {
var obj = { usr: usr}
    res.render("adm/sel", obj);
};


router.get("/adm/sel", [getUsr,allPre,
chk, gcb])

module.exports = router
