import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const TopBanner = () => {
  const handleButtonClick = () => {
    console.log("Button clicked");
    // Add your button functionality here (e.g., printing a report)
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: "#8174A0", display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Welcome to Your Dashboard, Nupur
        </Typography>
        
        {/* Button aligned to the right */}
        <Box>
          <Button 
            variant="contained" 
            sx={{ bgcolor: "#13538a", color: "white" }} 
            onClick={handleButtonClick}
          >
            Print Report
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBanner;
