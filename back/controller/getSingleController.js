const Course = require('../model/addModel');
const mongoose = require('mongoose');

const getSingleCourse = async(req,res) =>{
    try{
        const id = req.params.id;

        const singleCourse = await Course.findById(id);

        
        if(!singleCourse){
            return res.status(404).json({message:"Course not found"});
        }

        res.status(200).json(singleCourse);

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}

module.exports = getSingleCourse;