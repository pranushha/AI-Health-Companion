import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const HabitAnalysisCard = ({ habitName, data }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: '0 auto' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {habitName}
        </Typography>
        <LineChart width={250} height={150} data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default HabitAnalysisCard;
