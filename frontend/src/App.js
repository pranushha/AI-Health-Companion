import React from 'react';
import { CssBaseline } from '@mui/material';
import Dashboard from './Dashboard';

function App() {
  return (
    <div>
      {/* Normalize styles */}
      <CssBaseline />
      {/* Main Dashboard Component */}
      <Dashboard />
    </div>
  );
}

export default App;
