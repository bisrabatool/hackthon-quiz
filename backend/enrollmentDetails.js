const mongoose = require("mongoose");

const EnrollmentSchema = new mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    batch: {
      type: String,
      required: true,
    },
    teacher: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
   
  },
  {
    collection: "EnrollmentInfo",
    timestamps: true,
  }
);

const Enrollment = mongoose.model("EnrollmentInfo", EnrollmentSchema);
module.exports = Enrollment;
