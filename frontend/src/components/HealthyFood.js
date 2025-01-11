import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

const healthyFoodData = [
  { name: 'Good', value: 70 },
  { name: 'Processed', value: 30 },
];

const COLORS = ['#28a745', '#ff9f00'];

const HealthyFood = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h8">Healthy Food Consumption</Typography>
        <PieChart width={240} height={200}>
          <Pie
            data={healthyFoodData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
            label={(entry) => `${entry.name}: ${entry.value}%`}
          >
            {healthyFoodData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default HealthyFood;
