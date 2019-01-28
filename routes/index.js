var express = require('express');
var router = express.Router();
var fs=require("fs")
var ls=require("ls")
var db=require("dblo")
// glob
var par
    var iarr=[],typblo,path="public/img/*"

var reaImg=function(req, res, next) {

for (var i of ls(path)){
console.log(i.full)
iarr.push(i.full)
//console.log(i)
}

console.log(iarr)
// var fil="public/img/8304.jpg"
// fs.readFile(fil,"utf8", function(err,dat) {
// if (err) {return console.log(err); }
// console.log(dat)
// })

next()}

var getPar=function(req, res, next) {
par=req.params.id

next()}

var chk=function(req, res, next) {
console.log(par)
next()}

// get
var gcb= function(req, res, next) {

res.render("index", {
title: par,
par:par

});
}

router.get('/', [getPar,chk,gcb])
// post


module.exports = router;
