import React from 'react';
import { Box } from '@mui/material';
import './Community.css';
import Leaderboard from './components/Leaderboard';
import TopBanner from './TopBanner';
import LeftNavBar from './LeftNavBar';
import image from './images.jpg';
import purpleOwl from './purpleowl.jpg';

const Community = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
      {/* Top Banner */}
      <Box sx={{ flexShrink: 0 }}>
        <TopBanner />
      </Box>

      {/* Main Layout */}
      <Box sx={{ display: 'flex', flex: 1 }}>
       
        <Box sx={{ width: '250px', overflowY: 'auto', flexShrink: 0 }}>
          <LeftNavBar />
        </Box>

        {/* Main Content */}
        <Box sx={{ flex: 1, padding: 2, overflowY: 'auto' }}>
          <h2 style={{ textAlign: 'center' }}>Community</h2>
          <div className="post">
            <img src={image}  alt="Streak" />
            <div className="actions">
              <button>Like</button>
              <button>Share</button>
              <button>Comment</button>
            </div>
          </div>
          <Box className="content">
            <Box className="leaderboard">
              <Leaderboard />
            </Box>
            <Box className="score-card">
              <h2>Score</h2>
              <p>87657</p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Community;
