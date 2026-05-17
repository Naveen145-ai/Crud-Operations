const Course = require('../model/addModel');

const addCourse = async (req, res) => {
    const { name, price, desc, seats } = req.body;

    try {
        const course = await Course.create({ name, price, desc, seats });
        res.status(201).send(course);
        console.log("Course added");
    } catch (error) {
        console.log("Error adding course:", error);
        res.status(500).send({ message: error.message });
    }
};

module.exports = addCourse;