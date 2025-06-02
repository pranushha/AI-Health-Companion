import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const mockLeaderboardData = [
  { rank: 1, name: 'You', score: 95 },
  { rank: 2, name: 'Nupur', score: 90 },
  { rank: 3, name: 'Pranusha', score: 85 },
  { rank: 4, name: 'David', score: 80 },
  { rank: 5, name: 'Eve', score: 75 },
  { rank: 6, name: 'U', score: 70 },
  { rank: 7, name: 'Bob', score: 65 },
  { rank: 8, name: 'Charlie', score: 60 },
  { rank: 9, name: 'David', score: 55 },
  { rank: 10, name: 'Eve', score: 50 },
];

const Leaderboard = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h8" gutterBottom>
          Leaderboard
        </Typography>
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: 200, 
            overflowY: 'auto', 
          }}
        >
          <Table sx={{ minWidth: 200, bgcolor: '#e9e9e3' }}>
            <TableHead>
              <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Score</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockLeaderboardData.map((row) => (
                <TableRow
                  key={row.rank}
                  sx={{
                    backgroundColor: row.name === 'You' ? '#bcaad0' : 'inherit',
                  }}
                >
                  <TableCell>{row.rank}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
