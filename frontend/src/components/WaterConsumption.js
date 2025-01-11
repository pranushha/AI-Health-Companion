import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const waterData = [
  {"user_id": 1, "date": "2025-01-01", "sleep_hours": 7, "exercise_minutes": 30, "calories_consumed": 2200, "stress_level": 4, "water_consumed": 2.5, "healthy_food_servings": 5, "mood": 3},
  {"user_id": 1, "date": "2025-01-02", "sleep_hours": 6, "exercise_minutes": 40, "calories_consumed": 2300, "stress_level": 5, "water_consumed": 3.0, "healthy_food_servings": 4, "mood": 2},
  {"user_id": 1, "date": "2025-01-03", "sleep_hours": 8, "exercise_minutes": 20, "calories_consumed": 2100, "stress_level": 3, "water_consumed": 2.0, "healthy_food_servings": 6, "mood": 4},
  {"user_id": 1, "date": "2025-01-04", "sleep_hours": 7, "exercise_minutes": 35, "calories_consumed": 2250, "stress_level": 4, "water_consumed": 2.8, "healthy_food_servings": 5, "mood": 3},
  {"user_id": 1, "date": "2025-01-05", "sleep_hours": 6, "exercise_minutes": 25, "calories_consumed": 2400, "stress_level": 6, "water_consumed": 1.9, "healthy_food_servings": 4, "mood": 2},
  {"user_id": 1, "date": "2025-01-06", "sleep_hours": 7, "exercise_minutes": 45, "calories_consumed": 2150, "stress_level": 4, "water_consumed": 3.2, "healthy_food_servings": 6, "mood": 4},
  {"user_id": 1, "date": "2025-01-07", "sleep_hours": 6, "exercise_minutes": 30, "calories_consumed": 2300, "stress_level": 5, "water_consumed": 2.5, "healthy_food_servings": 5, "mood": 3},
  {"user_id": 1, "date": "2025-01-08", "sleep_hours": 8, "exercise_minutes": 20, "calories_consumed": 2200, "stress_level": 3, "water_consumed": 2.0, "healthy_food_servings": 6, "mood": 4},
  {"user_id": 1, "date": "2025-01-09", "sleep_hours": 7, "exercise_minutes": 30, "calories_consumed": 2250, "stress_level": 4, "water_consumed": 3.0, "healthy_food_servings": 5, "mood": 3},
  {"user_id": 1, "date": "2025-01-10", "sleep_hours": 6, "exercise_minutes": 40, "calories_consumed": 2350, "stress_level": 5, "water_consumed": 2.3, "healthy_food_servings": 4, "mood": 2},
  {"user_id": 1, "date": "2025-01-11", "sleep_hours": 7, "exercise_minutes": 25, "calories_consumed": 2100, "stress_level": 4, "water_consumed": 2.7, "healthy_food_servings": 6, "mood": 3},
  {"user_id": 1, "date": "2025-01-12", "sleep_hours": 8, "exercise_minutes": 35, "calories_consumed": 2250, "stress_level": 3, "water_consumed": 3.0, "healthy_food_servings": 5, "mood": 4},
  {"user_id": 1, "date": "2025-01-13", "sleep_hours": 7, "exercise_minutes": 30, "calories_consumed": 2300, "stress_level": 4, "water_consumed": 2.4, "healthy_food_servings": 5, "mood": 3},
  {"user_id": 1, "date": "2025-01-14", "sleep_hours": 6, "exercise_minutes": 50, "calories_consumed": 2400, "stress_level": 6, "water_consumed": 2.8, "healthy_food_servings": 4, "mood": 2},
  {"user_id": 1, "date": "2025-01-15", "sleep_hours": 7, "exercise_minutes": 40, "calories_consumed": 2250, "stress_level": 5, "water_consumed": 3.0, "healthy_food_servings": 5, "mood": 3},
  {"user_id": 1, "date": "2025-01-16", "sleep_hours": 6, "exercise_minutes": 30, "calories_consumed": 2200, "stress_level": 4, "water_consumed": 2.5, "healthy_food_servings": 6, "mood": 3},
  {"user_id": 1, "date": "2025-01-17", "sleep_hours": 8, "exercise_minutes": 25, "calories_consumed": 2100, "stress_level": 3, "water_consumed": 2.0, "healthy_food_servings": 6, "mood": 4},
  {"user_id": 1, "date": "2025-01-18", "sleep_hours": 7, "exercise_minutes": 30, "calories_consumed": 2300, "stress_level": 4, "water_consumed": 3.0, "healthy_food_servings": 5, "mood": 3},
  {"user_id": 1, "date": "2025-01-19", "sleep_hours": 6, "exercise_minutes": 35, "calories_consumed": 2400, "stress_level": 5, "water_consumed": 2.5, "healthy_food_servings": 4, "mood": 2},
  {"user_id": 1, "date": "2025-01-20", "sleep_hours": 7, "exercise_minutes": 40, "calories_consumed": 2250, "stress_level": 4, "water_consumed": 3.0, "healthy_food_servings": 5, "mood": 3},
  {"user_id": 1, "date": "2025-01-21", "sleep_hours": 6, "exercise_minutes": 30, "calories_consumed": 2200, "stress_level": 5, "water_consumed": 2.8, "healthy_food_servings": 4, "mood": 2}
];

const WaterConsumption = () => {
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
          <Bar dataKey="water_consumed" fill="#13538a" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default WaterConsumption;
