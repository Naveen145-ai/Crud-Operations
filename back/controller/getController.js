const Course = require('../model/addModel');

const getCourse = async (req, res) => {

    try {
        
        const courses = await Course.find();

        res.status(200).send(courses);
        console.log("Available courses");
        
    } catch (error) {
        res.status(500).send({message:error.message});
    }
}

module.exports = getCourse;