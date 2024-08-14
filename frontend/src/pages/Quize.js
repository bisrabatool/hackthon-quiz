
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, TextField } from '@mui/material';
import { htmlQuizData, cssQuizData, jsQuizData } from '../data/quizData';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const [quizType, setQuizType] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [accessKey, setAccessKey] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [keyEntered, setKeyEntered] = useState(false);
  const [completedQuizzes, setCompletedQuizzes] = useState([]); // New state to track completed quizzes
  const navigate = useNavigate();

  const correctAccessKey = '123495'; // Replace this with your desired access key

  useEffect(() => {
    // API for load completd quiz
    const storedCompletedQuizzes = JSON.parse(localStorage.getItem('completedQuizzes')) || [];
    setCompletedQuizzes(storedCompletedQuizzes);
  }, []);

  useEffect(() => {
    // API for save data
    localStorage.setItem('completedQuizzes', JSON.stringify(completedQuizzes));
  }, [completedQuizzes]);

  const handleKeySubmit = () => {
    if (accessKey === correctAccessKey) {
      setIsAuthorized(true);
      setKeyEntered(true);
    } else {
      alert('Invalid key. Please try again.');
    }
  };

  const handleQuizSelection = (type) => {
    if (!keyEntered) {
      alert('Please enter the correct access key to continue.');
      return;
    }
    if (completedQuizzes.includes(type)) {
      alert('You have already completed this quiz.');
      return;
    }
    setQuizType(type);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setShowResult(false);
    setScore(0);
  };

  const quizData = quizType === 'HTML' ? htmlQuizData
                 : quizType === 'CSS' ? cssQuizData
                 : quizType === 'JavaScript' ? jsQuizData
                 : [];

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (selectedAnswers[currentQuestionIndex] === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
      setCompletedQuizzes([...completedQuizzes, quizType]); // Add quiz type to completed quizzes
    }
  };

  const handleGoBackToDashboard = () => {
    navigate('/stdDashboard');
  };

  return (
    <Box
      sx={{
        padding: '20px',
        textAlign: 'center',
        background: 'linear-gradient(to right, rgba(0, 172, 193, 0.8), rgba(67, 160, 71, 0.8))',
        minHeight: '100vh',
        color: 'white',
        fontFamily: 'Pacifico, sans-serif',
      }}
    >
      {!isAuthorized ? (
        <>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}
          >
            Enter Access Key
          </Typography>
          <TextField
            variant="outlined"
            value={accessKey}
            onChange={(e) => setAccessKey(e.target.value)}
            sx={{
              input: { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'white',
                },
                '&:hover fieldset': {
                  borderColor: 'white',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'white',
                },
              },
              marginBottom: '20px',
            }}
          />
          <Button
            variant="contained"
            onClick={handleKeySubmit}
            sx={{
              padding: '10px 20px',
              fontSize: '1rem',
              fontWeight: 'bold',
              color: 'white',
              borderColor: 'white',
              backgroundColor: 'rgba(67, 160, 71, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(67, 160, 71, 1)',
              },
            }}
          >
            Submit Key
          </Button>
        </>
      ) : !quizType ? (
        <>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}
          >
            Select a Quiz
          </Typography>
          <Box sx={{ marginBottom: '30px' }}>
            <Button
              variant="contained"
              onClick={() => handleQuizSelection('HTML')}
              sx={{
                margin: '10px',
                padding: '10px 20px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'white',
                borderColor: 'white',
                backgroundColor: completedQuizzes.includes('HTML') ? 'grey' : 'rgba(67, 160, 71, 0.8)',
                '&:hover': {
                  backgroundColor: completedQuizzes.includes('HTML') ? 'grey' : 'rgba(67, 160, 71, 1)',
                },
                pointerEvents: completedQuizzes.includes('HTML') ? 'none' : 'auto'
              }}
              disabled={completedQuizzes.includes('HTML')}
            >
              HTML Quiz
            </Button>
            <Button
              variant="contained"
              onClick={() => handleQuizSelection('CSS')}
              sx={{
                margin: '10px',
                padding: '10px 20px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'white',
                borderColor: 'white',
                backgroundColor: completedQuizzes.includes('CSS') ? 'grey' : 'rgba(67, 160, 71, 0.8)',
                '&:hover': {
                  backgroundColor: completedQuizzes.includes('CSS') ? 'grey' : 'rgba(67, 160, 71, 1)',
                },
                pointerEvents: completedQuizzes.includes('CSS') ? 'none' : 'auto'
              }}
              disabled={completedQuizzes.includes('CSS')}
            >
              CSS Quiz
            </Button>
            <Button
              variant="contained"
              onClick={() => handleQuizSelection('JavaScript')}
              sx={{
                margin: '10px',
                padding: '10px 20px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'white',
                borderColor: 'white',
                backgroundColor: completedQuizzes.includes('JavaScript') ? 'grey' : 'rgba(67, 160, 71, 0.8)',
                '&:hover': {
                  backgroundColor: completedQuizzes.includes('JavaScript') ? 'grey' : 'rgba(67, 160, 71, 1)',
                },
                pointerEvents: completedQuizzes.includes('JavaScript') ? 'none' : 'auto'
              }}
              disabled={completedQuizzes.includes('JavaScript')}
            >
              JavaScript Quiz
            </Button>
          </Box>
        </>
      ) : !showResult ? (
        <>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px' }}
          >
            {quizData[currentQuestionIndex].question}
          </Typography>
          <Box sx={{ marginBottom: '30px' }}>
            {quizData[currentQuestionIndex].options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswers[currentQuestionIndex] === option ? 'contained' : 'outlined'}
                onClick={() => handleAnswerSelect(option)}
                sx={{
                  margin: '10px',
                  padding: '10px 20px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'white',
                  borderColor: 'white',
                  backgroundColor: selectedAnswers[currentQuestionIndex] === option ? 'rgba(67, 160, 71, 0.8)' : 'transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 172, 193, 0.2)',
                  },
                }}
              >
                {option}
              </Button>
            ))}
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextQuestion}
            disabled={!selectedAnswers[currentQuestionIndex]}
            sx={{
              fontWeight: 'bold',
              fontSize: '1rem',
              padding: '10px 20px',
              backgroundColor: 'rgba(0, 172, 193, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(0, 172, 193, 1)',
              },
            }}
          >
            {currentQuestionIndex < quizData.length - 1 ? 'Next' : 'Submit'}
          </Button>
        </>
      ) : (
        <>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}
          >
            Result
          </Typography>
          <Typography variant="h5" gutterBottom>
            You got {score} out of {quizData.length} correct!
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: score >= 15 ? 'rgba(67, 160, 71, 0.8)' : 'rgba(244, 67, 54, 0.8)',
              fontWeight: 'bold',
              marginBottom: '30px',
            }}
          >
            {score >= 15 ? 'Congratulations, you passed!' : 'Sorry, you failed.'}
          </Typography>
          {quizData.map((question, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                padding: '15px',
                borderRadius: '8px',
                marginBottom: '20px',
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', color: 'white', marginBottom: '10px' }}
              >
                {index + 1}. {question.question}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color:
                    selectedAnswers[index] === question.correctAnswer
                      ? 'rgba(67, 160, 71, 0.8)'
                      : 'rgba(244, 67, 54, 0.8)',
                }}
              >
                Your answer: {selectedAnswers[index]}
              </Typography>
              {selectedAnswers[index] !== question.correctAnswer && (
                <Typography
                  variant="body1"
                  sx={{ color: 'rgba(67, 160, 71, 0.8)' }}
                >
                  Correct answer: {question.correctAnswer}
                </Typography>
              )}
            </Box>
          ))}
          <Button
            variant="contained"
            color="secondary"
            onClick={handleGoBackToDashboard}
            sx={{
              fontWeight: 'bold',
              fontSize: '1rem',
              padding: '10px 20px',
              backgroundColor: 'rgba(67, 160, 71, 0.8)',
              '&:hover': {
                backgroundColor: 'rgba(67, 160, 71, 1)',
              },
            }}
          >
            Back to Dashboard
          </Button>
        </>
      )}
    </Box>
  );
};

export default QuizPage;












