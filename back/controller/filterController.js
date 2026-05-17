const Course = require('../model/addModel');

const filterCourse = async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).send({ 
                message: 'Please provide course name to search'
            });
        }

        const courses = await Course.find({ 
            name: { $regex: name, $options: 'i' } 
        });

        if (courses.length === 0) {
            return res.status(404).send({ 
                message: 'No courses found'
            });
        }

        res.status(200).send(courses);
        
    } catch (error) {
        console.log("Error searching course:", error);
        res.status(500).send({ 
            message: error.message 
        });
    }
};

module.exports = filterCourse;
