import React, { useState, useEffect } from 'react';
import { Box, Grid2, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import LeftNavBar from './LeftNavBar';
import TopBanner from './TopBanner';
import OverallProgress from './OverallProgress';
import AISuggestions from './AISuggestions';
import WaterConsumption from './components/WaterConsumption';
import StressLevel from './components/StressLevel';
import HealthyFood from './components/HealthyFood';
import Exercise from './components/Exercise';
import Sleep from './components/Sleep';
import Leaderboard from './components/Leaderboard';
import MoodGraph from './components/MoodGraph';

// Mock Data (as you provided)
const mockData = [
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


const suggestions = [
  'Hoot! 🌙 It’s time to unwind. Meditate for 5 minutes daily to sharpen your focus and bring peace to your busy mind.',
  'Hoo, hooo! 🦉 Your body craves water, just like a thirsty owl in the forest. Increase your water intake to stay energized and refreshed!',
  'Sleep like a wise owl under the moonlight 🌜. Aim for at least 7 hours of restful sleep tonight to restore your body and mind.',
];


const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('this_week');
  const [filteredData, setFilteredData] = useState(mockData);

  // Use useEffect to apply filters whenever selectedFilter changes
  useEffect(() => {
    const today = new Date();
    let startDate;

    // Calculate date ranges for filters
    if (selectedFilter === 'this_week') {
      // Get the start of the current week (Monday)
      const dayOfWeek = today.getDay();
      startDate = new Date(today);
      startDate.setDate(today.getDate() - dayOfWeek); // Set to previous Monday
    } else if (selectedFilter === 'last_month') {
      // Get the date 30 days ago
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 30);
    } else {
      // No filter, show all data
      setFilteredData(mockData);
      return;
    }

    // Filter the mock data based on the selected date range
    const filtered = mockData.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate;
    });

    setFilteredData(filtered);
  }, [selectedFilter]);

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Section: Graphs */}
      <LeftNavBar />
      <Box sx={{ flex: 1 }}>
        <TopBanner />
        <OverallProgress progress={70} />

        {/* Filter Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <FormControl variant="outlined" sx={{ width: 200, height: 30}}>
            <InputLabel>Filter</InputLabel>
            <Select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              label="Filter"
            >
              <MenuItem value="this_week">This Week</MenuItem>
              <MenuItem value="last_month">Last Month</MenuItem>
              <MenuItem value="overall">Overall</MenuItem>
            </Select>
          </FormControl>
          <Grid2 item xs={12} sm={6} md={3}>
            <MoodGraph habitName="Mood" data={filteredData} />
          </Grid2>
        </Box>
        

        {/* Habit Tracking Components */}
        <Grid2 container spacing={2} sx={{ marginTop: 3 }}>
          <Grid2 item xs={12} sm={6} md={3}>
            <Exercise habitName="Exercise" data={filteredData} />
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <Sleep habitName="Sleep" data={filteredData} />
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <Leaderboard habitName="Leaderboard" data={filteredData} />
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <HealthyFood habitName="Healthy Food" data={filteredData} />
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <StressLevel habitName="Stress" data={filteredData} />
          </Grid2>
          <Grid2 item xs={12} sm={6} md={3}>
            <WaterConsumption habitName="Water" data={filteredData} />
          </Grid2>
        </Grid2>
        
      </Box>

      {/* Right Section: AI Suggestions */}
      <Box sx={{ width: '400px', p: 3, backgroundColor: '#f4f4f4', height: '100%' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Your Fitness Buddy</Typography>
        <AISuggestions suggestions={suggestions} />
      </Box>
    </Box>
  );
};

export default Dashboard;
