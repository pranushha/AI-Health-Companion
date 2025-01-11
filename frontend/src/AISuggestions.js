import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const AISuggestions = ({ suggestions }) => {
  return (
    <Box
      sx={{
        bgcolor: '#e9e9e3',
        borderRadius: 2,
        p: 3,
        height: '100%',
        overflowY: 'auto',
        position: 'relative', // Needed for sticky positioning of the image
      }}
    >
      <Typography variant="h6" gutterBottom>
        
      </Typography>
      {suggestions.map((suggestion, index) => (
        <Typography key={index} variant="body1" sx={{ mb: 1 }}>
          {index + 1}. {suggestion}
        </Typography>
      ))}

      {/* Sticky Image Section */}
      <Box
        sx={{
          position: 'static',
          bottom: 20, // Adjust the distance from the bottom
          width: '100%',
          backgroundColor: '#e9e9e3',
          p: 2,
        }}
      >
        <img
          src="owlhealth.jpg" // Replace with your image URL
          alt="AI Image"
          style={{
            width: '100%',
            color:'#e9e9e3',
          }}
        />
      </Box>
    </Box>
  );
};

export default AISuggestions;
