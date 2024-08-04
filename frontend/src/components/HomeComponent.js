import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/smitlogo.png';
import '../components/home.css';

const HomePage = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    if (name.trim()) {
      navigate(`/quiz?name=${name}`);
    } else {
      alert('Please enter your name.');
    }
  };

  return (
    <div className="homecontainer">
      <header className="homeheader">
        <img src={logo} alt="Saylani Logo" className="saylani-logo" />
        <h1 className="hometitle">Welcome to the Saylani Quiz App</h1>
        <p className="homedescription">Test your knowledge with our interactive quizzes!</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="nameinput"
        />
        <button className="startbutton" onClick={handleStartQuiz}>
          Start Quiz
        </button>
      </header>
    </div>
  );
};

export default HomePage;
