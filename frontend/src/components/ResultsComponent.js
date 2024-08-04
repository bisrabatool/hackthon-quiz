import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const ResultsComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, totalQuestions } = location.state || { score: 0, totalQuestions: 0 };

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <Box p={2}>
      <Typography variant="h4">Quiz Completed</Typography>
      <Typography variant="h6">You scored {score} out of {totalQuestions}</Typography>
      <Button variant="contained" color="primary" onClick={handleRestart}>
        Restart Quiz
      </Button>
    </Box>
  );
};

export default ResultsComponent;
