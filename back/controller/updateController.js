const Course = require('../model/addModel');

const updateCourse = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, price, desc, seats } = req.body;

        const updatedCourse = await Course.findByIdAndUpdate(
            id,
            { name, price, desc, seats },
            { new: true, runValidators: true }
        );

        if (!updatedCourse) {
            return res.status(404).send({ message: "Course not found" });
        }

        res.status(200).send({
            message: "Course updated",
            course: updatedCourse
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = updateCourse;