var express = require('express');
var router = express.Router();
var db=require("roblo")
var bod,name,pss,mail,item
var allmer

var allMer=function(req, res, next) {
try{allmer=db.allMer()}
catch(err){console.log(err)}
next()}

var chk=function(req, res, next) {
bod=req.body
next()}

// in

var cb= function(req, res, next) {

res.render("pre/in", {
bod:bod,allmer:allmer
});
}

router.get('/pre/in',[allMer,chk,cb])

//in2
var chk=function(req, res, next) {
bod=req.body
next()}


var inPre=function(req, res, next) {
console.log("== in pre")
console.log(bod.name)

    if(bod.name){
try{
    db.inPre(bod.name,bod.item,bod.unit,0)}
    catch(err){console.log(err)}
    }else{
        console.log("name is empty")
        res.redirect("/pre/in")
    }

next()}


var chk=function(req, res, next) {

bod=req.body
console.log(bod)
next()}


var cb= function(req, res, next) {

res.render("pre/in2", {
bod:bod
});
}

router.post('/pre/in2', [chk,cb])

// in3
var chk=function(req, res, next) {

bod=req.body
console.log(bod)
next()}

var cb= function(req, res, next) {
bod=req.body

res.render("pre/in3", {
bod:bod
});
}

router.post('/pre/in3', [inPre,chk,cb])

module.exports = router;
