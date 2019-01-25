var express = require('express');
var router = express.Router();
var fs=require("fs")
var ls=require("ls")
var db=require("dblo")
// glob
var par,iarr=[],typblo,path="public/img/*"
var head,dev

var getHead=function(req, res, next) {
head=req.headers["user-agent"]
    dev=req.device

next()}

var reaImg=function(req, res, next) {

for (var i of ls(path)){
    //console.log(i.full)
iarr.push(i.full)

}

console.log(iarr)
par=req.params.id
next()}


var chk=function(req, res, next) {
console.log(head)
console.log(dev)

next()}

// get
var gcb= function(req, res, next) {

res.render("index", {
title: par,
par:par,
iarr:iarr

});
}

router.get('/', [getHead,chk,gcb])
// post


module.exports = router;
