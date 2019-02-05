var express = require('express');
var router = express.Router();
var db=require("roblo")
var bod,name,pss,mail,item
var allmer,selmer,par,boo
var sku,pr,uni

var allMer=function(req, res, next) {
try{allmer=db.allMer()}
catch(err){console.log(err)}
next()}

var getPar=function(req, res, next) {
par=req.params.id
next()}

var getBod=function(req, res, next) {
bod=req.body
boo=req.body.boo
next()}

// in

var cb= function(req, res, next) {
res.render("pre", {
    par:par,
    bod:bod,
    allmer:allmer
});
}

router.get('/pre',[getPar,allMer,getBod,cb])

//in2


var selMer=function(req, res, next) {
console.log("== selmer")
try{selmer=db.selMer(bod.item)
sku=selmer.sku
pri=selmer.pri
uni=selmer.uni
console.log(sku)
}
catch(err){console.log(err)}

next()}


var cb= function(req, res, next) {

if(bod.mail && bod.name && bod.item && bod.unit){

res.render("pre/in2", {
par:par, boo:boo,
bod:bod,sku,pri,uni
});

}else{
console.log("name is empty")
res.redirect("/pre")
}
}

router.post('/pre/in2', [getPar,getBod,selMer,cb])

// in3

var inPre=function(req, res, next) {
console.log("== ins pre ")

if(bod.name && bod.mail && sku && bod.unit &&boo==0) {
try{db.inPre(bod.name,bod.mail,sku,bod.unit,0)}
catch(err){console.log(err)}
boo=1
}else{
console.log("name is empty")
res.redirect("/pre")
}

next()}

var senEma=function(req, res, next) {
var sen=require("./js/mail")
    try{
    sen(bod.name,bod.mail,sku,bod.unit)
    }catch(err){console.log(err)}
next()}

var cb= function(req, res, next) {

res.render("pre/in3", {
par:par,boo:boo,
bod:bod,sku:sku,pri:pri
});
}

router.post('/pre/in3', [getPar,selMer,inPre,senEma,cb])

module.exports = router;
