import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const TopBanner = () => {
  const handleButtonClick = () => {
    const reportContent = `
📋 Habit Report for Pranusha

✅ Overall Progress: 70% of your habits completed

🧠 Mood Over Time:
(Good = 4, Okay = 3, Bad = 2)
[Sample Mood Data Here - e.g., 4, 3, 3, 2, 4, 4]

🏃 Exercise Time Over Time:
[Sample Exercise Data Here - e.g., Mon: 20 min, Tue: 30 min, Wed: 0]

😴 Sleep Hours Over Time:
[Sample Sleep Data Here - e.g., Mon: 7 hrs, Tue: 6 hrs, Wed: 8 hrs]

🦉 Fitness Buddy Tips:
- Meditate for 5 minutes daily to bring peace.
- Drink water regularly to stay refreshed.
- Sleep at least 7 hours to restore energy.

📅 Filter Applied: This Week
    `;

    // Create a text Blob
    const blob = new Blob([reportContent], { type: 'text/plain' });

    // Create a download link and trigger it
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'habit-report.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ bgcolor: "#8174A0", display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Welcome to Your Dashboard, Pranusha
        </Typography>

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
