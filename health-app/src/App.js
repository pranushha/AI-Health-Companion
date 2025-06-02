import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import HabitLog from './HabitLog';
import Dashboard from './Dashboard';
import LeftNavBar from './LeftNavBar';
import AISuggestions from './AISuggestions';
import LoginPage from './LoginPage';
import Community from './Community';
import Register from './Register';

function App() {
  return (
    <Router>
      <CssBaseline />
     { /*<LeftNavBar/>*/}
     <LeftNavBar/>
      <Routes>
        <Route path="/" element={<HabitLog />} /> {/* Default route */}
        <Route path="/habits" element={<HabitLog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/journal" element={<AISuggestions />} /> 
        <Route path="/community" element={<Community />} />
        <Route path="/profile" element={<Register />} />
        <Route path="/settings" element={<AISuggestions />} />
      </Routes>
    </Router>
  );
}

export default App;


