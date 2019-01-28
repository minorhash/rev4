var express = require('express');
var router = express.Router();

var chk=function(req, res, next) {

next()}

// in

var cb= function(req, res, next) {
var par=req.params.id
var bod=req.body

res.render("pre/in", {
title: par,
par:par,
bod:bod
});
}

router.get('/pre/in', [chk,cb])

//in2

var inPre=function(req, res, next) {

next()}

var cb= function(req, res, next) {
var par=req.params.id
var bod=req.body

res.render("pre/in2", {
title: par,
par:par,
bod:bod
});
}

router.post('/pre/in2', [chk,cb])

// in3
var cb= function(req, res, next) {
var par=req.params.id
var bod=req.body

res.render("pre/in3", {
title: par,
par:par,
bod:bod
});
}

router.post('/pre/in3', [chk,cb])

module.exports = router;
