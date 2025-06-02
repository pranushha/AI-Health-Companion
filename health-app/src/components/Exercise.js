import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const Exercise = () => {
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/habits'); 
        // Format the data for the chart
        const formattedData = response.data.map((entry, index) => ({
          category: `Day ${index + 1}`,
          exercise_minutes: entry.exercise_minutes,
        }));
        setExerciseData(formattedData);
      } catch (error) {
        console.error('Error fetching exercise data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Exercise Time Over Time
        </Typography>
        <BarChart width={300} height={200} data={exerciseData}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="exercise_minutes" fill="#3f51b5" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default Exercise;
