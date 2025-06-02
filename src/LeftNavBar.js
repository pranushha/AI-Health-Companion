import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

const LeftNavBar = () => {
  return (
    <Box
      sx={{
        width: 140,
        bgcolor: '#D7D1E7',
        color: '#1E1E1E',
        height: '100%',
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Navigate
      </Typography>
      <List>
        <ListItem button component={Link} to="/habits">
          <ListItemText primary="HabitLog" />
        </ListItem>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Journal" />
        </ListItem>
        <ListItem button component={Link} to="/community">
          <ListItemText primary="Community" />
        </ListItem>
        <ListItem button component={Link} to="/profile">
          <ListItemText primary="Register" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftNavBar;
