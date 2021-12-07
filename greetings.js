const express=require("express");
const router=express.Router()
router.get("/greetings",function (req,res) {
    if(req.query.name){
 res.send(`welcome ${req.query.name}`) 
    }
    else {
        res.send("welcom anonymous")
    }
})


module.exports=router;