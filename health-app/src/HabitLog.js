import React, { useState } from 'react';
import { 
  Box, Typography, TextField, Checkbox, Select, MenuItem, FormControl, InputLabel, Button 
} from '@mui/material';
import LeftNavBar from './LeftNavBar'; 
import AISuggestions from './AISuggestions'; 
import TopBanner from './TopBanner'; 

const HabitLog = () => {
  //form
  const [formData, setFormData] = useState({
    exercise_minutes: '',
    healthy_food: false,
    sleep_hours: '',
    stress_level: '',
    water: '',
    mood: '',
  });

  // Mock suggestions (array)
  const suggestions = [
    'Hoot! 🌙 It’s time to unwind. Meditate for 5 minutes daily to sharpen your focus and bring peace to your busy mind.',
    'Hoo, hooo! 🦉 Your body craves water, just like a thirsty owl in the forest. Increase your water intake to stay energized and refreshed!',
    'Sleep like a wise owl under the moonlight 🌜. Aim for at least 7 hours of restful sleep tonight to restore your body and mind.',
  ];

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handling form submission (send data to backend)
  const handleSubmit = async () => {
    const user_id = 1; 
    const { exercise_minutes, healthy_food, sleep_hours, stress_level, water, mood } = formData;

    try {
      const response = await fetch('http://localhost:3001/habits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id,
          exercise_minutes,
          healthy_food,
          sleep_hours,
          stress_level,
          water,
          mood,
        }),
      });

      const result = await response.json();
      console.log('Habit log saved successfully:', result);
    } catch (err) {
      console.error('Error saving habit log:', err);
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
     
      <LeftNavBar />

      {/* Main Content */}
      <Box sx={{ flex: 1 }}>
        <TopBanner />

        <Box sx={{ display: 'flex', height: 'calc(100% - 64px)' }}>
          {/* Main Form Section */}
          <Box sx={{ flex: 2, padding: '20px', overflowY: 'auto' }}>
            <Typography variant="h4" gutterBottom>
              Welcome, Name
            </Typography>

            {/* Habit Tracker Form */}
            <Box sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', marginBottom: '20px' }}>
              <Typography variant="h5" gutterBottom>
                Weekly Habit Tracker
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 3fr', rowGap: 2, columnGap: 2 }}>
                <Typography>Exercise (Minutes)</Typography>
                <TextField
                  name="exercise_minutes"
                  type="number"
                  value={formData.exercise_minutes}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />

                <Typography>Healthy Food</Typography>
                <Checkbox
                  name="healthy_food"
                  checked={formData.healthy_food}
                  onChange={handleChange}
                />

                <Typography>Sleep (Hours)</Typography>
                <TextField
                  name="sleep_hours"
                  type="number"
                  value={formData.sleep_hours}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />

                <Typography>Stress</Typography>
                <FormControl fullWidth>
                  <InputLabel>Level</InputLabel>
                  <Select
                    name="stress_level"
                    value={formData.stress_level}
                    onChange={handleChange}
                  >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </Select>
                </FormControl>

                <Typography>Water (Cups)</Typography>
                <TextField
                  name="water"
                  type="number"
                  value={formData.water}
                  onChange={handleChange}
                  fullWidth
                  variant="outlined"
                />

                <Typography>Mood</Typography>
                <FormControl fullWidth>
                  <InputLabel>How are you feeling</InputLabel>
                  <Select
                    name="mood"
                    value={formData.mood}
                    onChange={handleChange}
                  >
                    <MenuItem value="Bad">Bad</MenuItem>
                    <MenuItem value="Okay">Okay</MenuItem>
                    <MenuItem value="Good">Good</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            {/* Additional Sections */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Box sx={{ flex: 1, border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
                <Typography variant="h6">Journal Entry</Typography>
                <TextField
                  placeholder="Today I..."
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                />
              </Box>
              <Box sx={{ flex: 1, border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
                <Typography variant="h6">Quote of the Day</Typography>
                <Typography>
                  "It does not matter how slowly you go as long as you do not stop." – Confucius
                </Typography>
              </Box>
            </Box>

            {/* Save Log Button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
              <Button variant="contained" color="primary" onClick={handleSubmit}>
                Save Log
              </Button>
            </Box>
          </Box>

          {/*AI Suggestions */}
          <Box sx={{ width: '400px', p: 3, backgroundColor: '#f4f4f4', overflowY: 'auto' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Your Fitness Buddy</Typography>
            <AISuggestions suggestions={suggestions} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HabitLog;
