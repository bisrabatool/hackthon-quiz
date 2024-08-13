const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  
});

const questionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['text', 'multiple', 'photo', 'video'],
    required: true
  },
  content: String,
  options: [optionSchema], 
  correctAnswer: String,
  points: Number,
  image: String, 
  video: String 
});

const quizSchema = new mongoose.Schema({
  course: {
    type: String,
    required: true
  },
  batch: {
    type: String,
    required: true
  },
  teacher: {
    type: String,
    required: true
  },
  courseModule: {
    type: String,
    required: true
  },
  timeLimit: {
    type: Number,
    required: true
  },
  questions: [questionSchema]
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;