var express = require('express');
var router = express.Router();
var cal=require("calendar-js")

var utc,ju,jul,au,aug,augc,sep
var pid

var getDat=function(req, res, next) {
utc = new Date().toJSON().slice(0,10).replace(/-/g,"/")
ju=cal().of(2018, 6)
    jul=ju.calendar
au=cal().of(2018, 7)

    aug=au.calendar
se=cal().of(2018, 8)
    sep=se.calendar
next()}


var chk=function(req, res, next) {
    var bod=req.body
    pid=req.params.id
    console.log(pid)
next()}

// post

var pcb= function(req, res, next) {

res.render("sch", {
title: "schedule",
    jul:jul,
    au:au,
    aug:aug,
    pid:pid,
sep:sep
});
}
router.post('/sch-:id', [getDat,chk,pcb])

module.exports = router;
