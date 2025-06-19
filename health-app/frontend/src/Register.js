import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [healthGoals, setHealthGoals] = useState({
    sleep_hours: '',
    exercise_minutes: '',
    healthy_food: false,
    mood: '',
    water: '',
    stress_level: '',
  });

  const [userInfo, setUserInfo] = useState({
    age: '',
    gender: '',
    height: '',
    weight: '',
  });

  const handleHealthGoalsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHealthGoals({
      ...healthGoals,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

//   const handleHealthGoalsSubmit = (e) => {
//     e.preventDefault();
//     console.log('Health Goals Submitted:', healthGoals);
//     // Code to send health goals data to the backend
//   };

//   const handleUserInfoSubmit = (e) => {
//     e.preventDefault();
//     console.log('User Info Submitted:', userInfo);
//     // Code to send user info data to the backend
//   };


const handleHealthGoalsSubmit = async (e) => {
    e.preventDefault();
    console.log('Health Goals Submitted:', healthGoals);
  
    try {
      const response = await fetch('http://localhost:3001/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(healthGoals),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Health goals successfully submitted:', result);
        alert('Health goals added successfully!');
      } else {
        console.error('Failed to submit health goals');
        alert('Failed to submit health goals. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting health goals:', error);
      alert('An error occurred while submitting health goals.');
    }
  };
  
  const handleUserInfoSubmit = async (e) => {
    e.preventDefault();
    console.log('User Info Submitted:', userInfo);
  
    try {
      const response = await fetch('http://localhost:3001/user_info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('User info successfully submitted:', result);
        alert('User info added successfully!');
      } else {
        console.error('Failed to submit user info');
        alert('Failed to submit user info. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting user info:', error);
      alert('An error occurred while submitting user info.');
    }
  };
  

  return (
    <div className="register-page">
      <h1>Set Your Health Goals</h1>
      <form onSubmit={handleHealthGoalsSubmit} className="register-form">
        <label>
          Sleep Hours:
          <input
            type="number"
            name="sleep_hours"
            value={healthGoals.sleep_hours}
            onChange={handleHealthGoalsChange}
          />
        </label>

        <label>
          Exercise Minutes:
          <input
            type="number"
            name="exercise_minutes"
            value={healthGoals.exercise_minutes}
            onChange={handleHealthGoalsChange}
          />
        </label>

        <label>
          Healthy Food:
          <input
            type="checkbox"
            name="healthy_food"
            checked={healthGoals.healthy_food}
            onChange={handleHealthGoalsChange}
          />
        </label>

        <label>
          Mood:
          <input
            type="text"
            name="mood"
            value={healthGoals.mood}
            onChange={handleHealthGoalsChange}
          />
        </label>

        <label>
          Water (ml):
          <input
            type="number"
            name="water"
            value={healthGoals.water}
            onChange={handleHealthGoalsChange}
          />
        </label>

        <label>
          Stress Level:
          <input
            type="text"
            name="stress_level"
            value={healthGoals.stress_level}
            onChange={handleHealthGoalsChange}
          />
        </label>

        <button type="submit">Submit Health Goals</button>
      </form>

      <h2>Provide Your Information</h2>
      <form onSubmit={handleUserInfoSubmit} className="register-form">
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={userInfo.age}
            onChange={handleUserInfoChange}
          />
        </label>

        <label>
          Gender:
          <select
            name="gender"
            value={userInfo.gender}
            onChange={handleUserInfoChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>

        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            value={userInfo.height}
            onChange={handleUserInfoChange}
          />
        </label>

        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            value={userInfo.weight}
            onChange={handleUserInfoChange}
          />
        </label>

        <button type="submit">Submit User Info</button>
      </form>
    </div>
  );
};

export default Register;
