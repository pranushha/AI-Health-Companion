import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

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
        Dashboard
      </Typography>
      <List>
        <ListItem button>
          <ListItemText primary="Habits" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Journal" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftNavBar;
