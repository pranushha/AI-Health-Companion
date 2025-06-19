import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import axios from 'axios';

const WaterConsumption = () => {
  const [waterData, setWaterData] = useState([]);

  useEffect(() => {
    // Fetching water data from API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/habits'); 
        setWaterData(response.data);
      } catch (error) {
        console.error('Error fetching water consumption data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Water Consumption Over Time
        </Typography>
        <BarChart width={280} height={200} data={waterData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="water" fill="#13538a" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default WaterConsumption;
