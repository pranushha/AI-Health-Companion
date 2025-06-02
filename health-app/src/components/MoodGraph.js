import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const MoodGraph = () => {
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/habits'); 
        //mood values to numeric equivalents (good = 4, okay = 3, bad = 2)
        const formattedData = response.data.map((entry) => ({
          category: entry.date,
          mood: entry.mood === 'Good' ? 4 : entry.mood === 'Okay' ? 3 : 2,
        }));
        setMoodData(formattedData);
      } catch (error) {
        console.error('Error fetching mood data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h8" gutterBottom>
          Mood Over Time(Good=4, Okay=3, Bad=2)
        </Typography>
        <BarChart width={300} height={80} data={moodData}>
          <XAxis dataKey="category" />
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
