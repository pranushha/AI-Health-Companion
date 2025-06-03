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

        // Map stress levels to numeric values
        const stressMap = {
          Low: 1,
          Medium: 2,
          High: 3,
        };

        const formattedData = response.data.map((entry) => ({
          date: entry.date,
          stress_level: stressMap[entry.stress_level] || 0, // default to 0 if undefined
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
        <Typography variant="h6" gutterBottom>
          Stress Level Over Time
        </Typography>
        <LineChart width={300} height={200} data={stressData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis
            domain={[0, 3]}
            ticks={[1, 2, 3]}
            tickFormatter={(tick) => {
              const levelMap = { 1: 'Low', 2: 'Medium', 3: 'High' };
              return levelMap[tick] || '';
            }}
          />
          <Tooltip
            formatter={(value) => {
              const levelMap = { 1: 'Low', 2: 'Medium', 3: 'High' };
              return levelMap[value] || value;
            }}
          />
          <Legend />
          <Line type="monotone" dataKey="stress_level" stroke="#FF6347" />
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default StressLevel;
