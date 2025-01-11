import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

const OverallProgress = ({ progress }) => {
  return (
    <Box sx={{ my: 3, mx: 2 }}>
      <Typography variant="h6" gutterBottom>
        Overall Progress
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: '#f4f6fc', // Optional: Change the background color of the progress bar
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#7cd4d2', // Set the progress bar color (green in this case)
          },
        }}
      />
      <Typography variant="body2" sx={{ mt: 1 }}>
        {progress}% of your habits completed
      </Typography>
    </Box>
  );
};

export default OverallProgress;
