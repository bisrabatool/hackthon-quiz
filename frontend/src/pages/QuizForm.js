import React, { useState } from 'react';
import { Box, Button, TextField, MenuItem, Typography } from '@mui/material';

const courses = ['Course 1', 'Course 2', 'Course 3']; //yhn course name aengy

function QuizForm({ onSubmitQuiz }) { // call back fuction hai 
  const [course, setCourse] = useState('');
  const [questions, setQuestions] = useState(['']); 

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index] = event.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, '']);
  };

  const handleSubmit = () => {
    const quizData = {
      course,
      questions: questions.map((question, index) => ({
        question,
        options: [], // options k liye
        answer: '' // answer
      }))
    };

    if (onSubmitQuiz) { // condition 
      onSubmitQuiz(quizData);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Create a Quiz
      </Typography>
      <TextField
        select
        label="Select Course"
        value={course}
        onChange={handleCourseChange}
        fullWidth
        margin="normal"
      >
        {courses.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      {questions.map((question, index) => (
        <TextField
          key={index}
          label={`Question ${index + 1}`}
          value={question}
          onChange={(event) => handleQuestionChange(index, event)}
          fullWidth
          margin="normal"
        />
      ))}
      <Button onClick={addQuestion} variant="outlined" sx={{ mt: 2 }}>
        Add Another Question
      </Button>
      <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
        Submit Quiz
      </Button>
    </Box>
  );
}

export default QuizForm;


