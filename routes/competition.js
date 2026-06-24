const express = require("express");
const Competition = require("../models/Competition");

const router = express.Router();


// GET ALL COMPETITIONS

router.get("/", async(req,res)=>{

    try{

        const competitions =
            await Competition.find();

        res.status(200).json(competitions);


    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});




// CREATE COMPETITION

router.post("/", async(req,res)=>{

    try{


        const competition =
            await Competition.create(req.body);


        res.status(201).json({

            message:"Competition created successfully",

            competition

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }

});



module.exports = router;