import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const Sleep = () => {
  const [sleepData, setSleepData] = useState([]);

  useEffect(() => {
    // Fetching data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/habits');
        
        const formattedData = response.data.map((entry) => ({
          date: entry.date,
          sleep_hours: entry.sleep_hours,
        }));
        setSleepData(formattedData);
      } catch (error) {
        console.error('Error fetching sleep data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h9" gutterBottom>
          Sleep Hours Over Time
        </Typography>
        <LineChart width={300} height={200} data={sleepData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sleep_hours" stroke="#00C49F" />
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default Sleep;
