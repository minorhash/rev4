var express = require('express');
var router = express.Router();
var db=require("roblo")
var bod,name,pss,mail,item

var chk=function(req, res, next) {
bod=req.body
next()}

// in

var cb= function(req, res, next) {

res.render("pre/in", {
bod:bod
});
}

router.get('/pre/in', [chk,cb])

//in2
var chk=function(req, res, next) {
bod=req.body
next()}

var inPre=function(req, res, next) {
console.log(bod.name)

try{
    db.inPre(bod.name,bod.mail,bod.pss,bod.item)}
    catch(err){console.log(err)}

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

router.post('/pre/in2', [chk,inPre,cb])

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

router.post('/pre/in3', [chk,cb])

module.exports = router;