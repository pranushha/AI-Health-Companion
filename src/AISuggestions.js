import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import purpleOwl from './purpleowl.jpg';

const AISuggestions = ({ suggestions }) => {
  return (
    <Box
      sx={{
        bgcolor: '#e9e9e3',
        borderRadius: 2,
        p: 3,
        height: '100%',
        overflowY: 'auto',
        position: 'relative', 
      }}
    >
      <Typography variant="h6" gutterBottom>
        AI Suggestions
      </Typography>
      {suggestions.map((suggestion, index) => (
        <Typography key={index} variant="body1" sx={{ mb: 1 }}>
          {index + 1}. {suggestion}

        </Typography>
      ))}
      {console.log(suggestions)}
      {/*  Image Section */}
      <Box
        sx={{
          position: 'static',
          bottom: 20, 
          width: '100%',
          backgroundColor: '#e9e9e3',
          p: 2,
        }}
      >
        <img
          src={purpleOwl} 
          alt="AI Image"
          style={{
            width: '100%',
            color: '#e9e9e3',
          }}
        />
      </Box>
    </Box>
  );
};

export default AISuggestions;
