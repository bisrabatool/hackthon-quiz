import React, { useState } from 'react';
import questions from '../data/Questions';
import { useNavigate } from 'react-router-dom';
import '../components/quiz.css'; // Import the new CSS file
import logo from '../assets/smitlogo.png';

const QuizComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
  };

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <img src={logo} alt="Saylani Logo" className="saylani-logo" />
        <h1 className="quiz-title">Welcome to the Quiz</h1>
      </header>
      {showResults ? (
        <div className="results">
          <h2>Your Score: {score} / {questions.length}</h2>
          <button className="next-button" onClick={handleRestart}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-content">
          <div className="question">
            {questions[currentQuestion].image && (
              <img src={questions[currentQuestion].image} alt="Question" className="question-image" />
            )}
            <h2>{questions[currentQuestion].question}</h2>
          </div>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="radio"
                  id={`option${index}`}
                  name="quiz"
                  value={option.text}
                  checked={selectedOption === option.text}
                  onChange={() => handleOptionSelect(option.text)}
                />
                <label htmlFor={`option${index}`}>
                  {option.image && <img src={option.image} alt={option.text} className="option-image" />}
                  {option.text}
                </label>
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleNextQuestion} disabled={!selectedOption}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
