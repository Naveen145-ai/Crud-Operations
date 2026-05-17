const Course = require('../model/addModel');

const delCourse = async (req, res) => {
    try {
        const id = req.params.id;
        await Course.findByIdAndDelete(id);
        res.status(200).send({
            message: "Course deleted",
        });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = delCourse;