import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// Your provided JSON data
const jsonData = [
  { "user_id": 1, "date": "2025-01-01", "mood": 3 },
  { "user_id": 1, "date": "2025-01-02", "mood": 2 },
  { "user_id": 1, "date": "2025-01-03", "mood": 4 },
  { "user_id": 1, "date": "2025-01-04", "mood": 3 },
  { "user_id": 1, "date": "2025-01-05", "mood": 2 },
  { "user_id": 1, "date": "2025-01-06", "mood": 4 },
  { "user_id": 1, "date": "2025-01-07", "mood": 3 },
  { "user_id": 1, "date": "2025-01-08", "mood": 4 },
  { "user_id": 1, "date": "2025-01-09", "mood": 3 },
  { "user_id": 1, "date": "2025-01-10", "mood": 2 },
  { "user_id": 1, "date": "2025-01-11", "mood": 3 },
  { "user_id": 1, "date": "2025-01-12", "mood": 4 },
  { "user_id": 1, "date": "2025-01-13", "mood": 3 },
  { "user_id": 1, "date": "2025-01-14", "mood": 2 },
  { "user_id": 1, "date": "2025-01-15", "mood": 3 },
  { "user_id": 1, "date": "2025-01-16", "mood": 3 },
  { "user_id": 1, "date": "2025-01-17", "mood": 4 },
  { "user_id": 1, "date": "2025-01-18", "mood": 3 },
  { "user_id": 1, "date": "2025-01-19", "mood": 2 },
  { "user_id": 1, "date": "2025-01-20", "mood": 3 },
  { "user_id": 1, "date": "2025-01-21", "mood": 2 },
];

// Format the data to fit the chart structure
const moodData = jsonData.map((entry, index) => ({
  category: entry.date,
  mood: entry.mood,
}));

const MoodGraph = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h8" gutterBottom>
          Mood Over Time
        </Typography>
        <BarChart width={700} height={80} data={moodData}>
          <XAxis sx={{
    Size: '5px',}} dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mood" fill="#c86974" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default MoodGraph;
