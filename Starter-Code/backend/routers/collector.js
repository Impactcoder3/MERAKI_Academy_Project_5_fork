const {updateRequestDetailsById}=require("../controllers/collector");
const authentication = require("../middleware/authentication");
const authorization=require("../middleware/authorization")
const express = require("express");
const collectorRouter=express.Router()

collectorRouter.put("/updateRequestDetailsById/:id", authentication, updateRequestDetailsById)

module.exports=collectorRouter