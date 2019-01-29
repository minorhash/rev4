var express = require("express")
var router = express.Router()
// == db =============================
var db = require("roblo")
var ses,bod,usr,mail

// === get ============================

var getUsr = function(req, res, next) {

bod=req.body

// try{ db.selUsr}

next()};

var chk= function(req, res, next) {
    console.log(bod)
    console.log(ses)
next()};

var gcb = function(req, res) {
var obj = { usr: usr}
    res.render("adm/sel", obj);
};


router.get("/adm/sel", [getUsr,
chk, gcb])

module.exports = router
