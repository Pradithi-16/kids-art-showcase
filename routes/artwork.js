const express = require("express");
const Artwork = require("../models/Artwork");

const router = express.Router();


// ===============================
// GET ALL ARTWORKS
// ===============================

router.get("/", async (req, res) => {

    try {

        const artworks = await Artwork.find();

        res.status(200).json(artworks);


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});



// ===============================
// GET SINGLE ARTWORK
// ===============================

router.get("/:id", async (req, res) => {

    try {

        const artwork =
            await Artwork.findById(req.params.id);


        if (!artwork) {

            return res.status(404).json({

                message: "Artwork not found"

            });

        }


        res.json(artwork);


    } catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

});



// ===============================
// UPLOAD ARTWORK
// ===============================

router.post("/upload", async (req, res) => {

    try {


        const {
            title,
            description,
            artist,
            category,
            image
        } = req.body;



        if (!title || !artist) {

            return res.status(400).json({

                message: "Title and artist are required"

            });

        }



        const artwork =
            await Artwork.create({

                title,

                description,

                artist,

                category,

                image,

                likes: 0

            });



        res.status(201).json({

            message: "Artwork uploaded successfully",

            artwork

        });



    } catch (error) {


        res.status(500).json({

            message: error.message

        });


    }

});



// ===============================
// LIKE ARTWORK
// ===============================

router.put("/like/:id", async (req, res) => {

    try {


        const artwork =
            await Artwork.findById(req.params.id);



        if (!artwork) {

            return res.status(404).json({

                message:"Artwork not found"

            });

        }



        artwork.likes =
            (artwork.likes || 0) + 1;



        await artwork.save();



        res.json({

            message:"Artwork liked",

            likes: artwork.likes

        });



    } catch(error) {


        res.status(500).json({

            message:error.message

        });


    }

});



// ===============================
// DELETE ARTWORK
// ===============================

router.delete("/:id", async(req,res)=>{


    try{


        const artwork =
            await Artwork.findByIdAndDelete(
                req.params.id
            );



        if(!artwork){

            return res.status(404).json({

                message:"Artwork not found"

            });

        }



        res.json({

            message:"Artwork deleted"

        });



    }catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



module.exports = router;