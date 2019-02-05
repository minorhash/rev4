var express = require('express');
var router = express.Router();
var par

var chk=function(req, res, next) {
par=req.params.id

next()}

// get
var pcb= function(req, res, next) {
console.log(par)
var bod=req.body
    //console.log(bod)

res.render("page", {
par: par,
bod:bod
});
}

// router.get("/page-:id",function(req,res){
// console.log(req.baseUrl)
//})

router.get('/page-:id', [chk,pcb])
// post


module.exports = router;
