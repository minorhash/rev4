const express = require('express');
const router = express.Router();
const db=require("roblo")

// glob
let par="",id="",title="",bod=""

const inBod=function(req, res, next) {

par=req.params.id
id=req.body.rowid
bod=req.body

const body=bod.bod
    const name=bod.name
    const mail=bod.mail
    const pss=bod.pss
    try{db.inPre(name,mail,pss)}
    catch(err){console.log(err)}

next()}

const chk=function(req, res, next) {

console.log(bod)
next()}

// get
const gcb= (req, res, next)=>

res.render("pre2", {
par:par,
bod:bod
});

const arr=[inBod,chk,gcb]

router.post('/pre2',arr)
// post


module.exports = router;
