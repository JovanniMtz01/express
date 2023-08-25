const express=require("express");
const apiContrller=require("../controllers/apiController");
const router=express.Router();

router.get("/",apiContrller.getAll);

module.exports=router;