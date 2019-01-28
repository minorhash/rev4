var express = require("express")
var router = express.Router()
// == db =============================
var db = require("roblo")
var bod,usr

// === get ============================

var getUsr = function(req, res, next) {

    bod=req.body
    usr=bod.name
    pss=bod.pss



next()};

var chk= function(req, res, next) {
    console.log(bod)
next()};

var gcb = function(req, res) {
var obj = { usr: usr}
    res.render("adm/sel2", obj);
};


router.post("/adm/sel2", [getUsr,
chk, gcb])

module.exports = router
