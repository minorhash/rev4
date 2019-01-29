var express = require("express")
var router = express.Router()
var url=require("url")
// == db =============================
var adb = require("roblo")

var age=require("superagent")
var cnf=require("./son/aid.json")
// === glob ============================
var email, usr,pid
var selpid, allpid,allnow,allpal,selqr,getpid
var ite, oite,opal,ship
var jpal=[],opal=[]
var literr,name,ite,host,boo

var cred = require("./js/cred")
// === get ============================
var getEma = function(req, res, next) {
email = cred.ema(req)
mailusr=  adb.mailUsr(email)
next()}

var getUsr = function(req, res, next) {
if(mailusr){usr=mailusr.name}
else{usr=null;console.log("no usr")}
next()};

var gcb = function(req, res) {
res.render("shop/adm/dl", {
title: "qr code", usr: usr, selpid: selpid,pid:pid,
allpid: allpid, allnow: allnow,
oite: oite,opal:opal,
allpal:allpal,selqr:selqr,
literr:literr
})

//res.redirect("/shop/qr-"+pid)
}


//router.put("/shop/adm/dl", [getEma, getUsr, setPid,allPid, allPal,selQR,
//chk])

router.post("/shop/adm/dl-:id", [getEma, getUsr, setPid,allPid, allPal,selQR,
chk, gcb])

router.get("/shop/adm/dl-:id", [getEma, getUsr, setPid,allPid, allPal,selQR,
//router.all("/shop/adm/dl-:id", [getEma, getUsr, setPid,allPid, allPal,selQR,
chk, gcb])

module.exports = router
