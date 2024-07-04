const express = require ("express");
const { getnews, createnews, deletenews, updatenews } = require("../controller/newsController");
const router = express.Router();



//  router.route("/api/news").get((req,res) =>{
//  	res.status(200).json({message:"get news"}); })


// router.route("/api/news").post((req,res)=>{
// 	console.log("the request body is:",req.body)
// res.status(200).json({message:"post aconta"});
//   });

//  router.route("/api/news").put((req,res)=>{
// 	res.status(200).json({message:"update contact"});
//  });

 
router.route("/").get(getnews);
router.route("/").post(createnews);
router.route("/").put(updatenews);
router.route("/").delete(deletenews);
module.exports = router;
