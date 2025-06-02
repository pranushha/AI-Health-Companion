import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const StressLevel = () => {
  const [stressData, setStressData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/habits'); 
        const formattedData = response.data.map((entry) => ({
          date: entry.date,
          stress_level: entry.stress_level,
        }));
        setStressData(formattedData);
      } catch (error) {
        console.error('Error fetching stress data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h8" gutterBottom>
          Stress Level Over Time
        </Typography>
        <LineChart width={300} height={200} data={stressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="stress_level" stroke="#FF6347" />
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default StressLevel;
