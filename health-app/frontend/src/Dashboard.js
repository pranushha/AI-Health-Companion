// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // For making API requests
// import { Box, Grid2, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
// import LeftNavBar from './LeftNavBar';
// import TopBanner from './TopBanner';
// import OverallProgress from './OverallProgress';
// import AISuggestions from './AISuggestions';
// import WaterConsumption from './components/WaterConsumption';
// import StressLevel from './components/StressLevel';
// import HealthyFood from './components/HealthyFood';
// import Exercise from './components/Exercise';
// import Sleep from './components/Sleep';
// import Leaderboard from './components/Leaderboard';
// import MoodGraph from './components/MoodGraph';
// const suggestions = [
//   'Hoot! 🌙 It’s time to unwind. Meditate for 5 minutes daily to sharpen your focus and bring peace to your busy mind.',
//   'Hoo, hooo! 🦉 Your body craves water, just like a thirsty owl in the forest. Increase your water intake to stay energized and refreshed!',
//   'Sleep like a wise owl under the moonlight 🌜. Aim for at least 7 hours of restful sleep tonight to restore your body and mind.',
// ];
// const Dashboard = () => {
//   const [selectedFilter, setSelectedFilter] = useState('this_week');
//   const [data, setData] = useState([]); // Store all data from the API
//   const [filteredData, setFilteredData] = useState([]);
//   // Fetch habits from the API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:3001/habits'); // Replace with your API URL
//         setData(response.data); // Store all habits
//         setFilteredData(response.data); // Initialize filtered data
//       } catch (error) {
//         console.error('Error fetching habits:', error);
//       }
//     };
//     fetchData();
//   }, []);
//   // Filter data based on the selected filter
//   useEffect(() => {
//     if (data.length === 0) return; // Do nothing if there's no data
//     const today = new Date();
//     let startDate;
//     if (selectedFilter === 'this_week') {
//       const dayOfWeek = today.getDay();
//       startDate = new Date(today);
//       startDate.setDate(today.getDate() - dayOfWeek); // Set to last Monday
//     } else if (selectedFilter === 'last_month') {
//       startDate = new Date(today);
//       startDate.setDate(today.getDate() - 30); // Set to 30 days ago
//     } else {
//       // No filter, show all data
//       setFilteredData(data);
//       return;
//     }
//     const filtered = data.filter((item) => {
//       const itemDate = new Date(item.date);
//       return itemDate >= startDate;
//     });
//     setFilteredData(filtered);
//   }, [selectedFilter, data]);
//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//       {/* Left Section: Graphs */}
//       <LeftNavBar />
//       <Box sx={{ flex: 1 }}>
//         <TopBanner />
//         <OverallProgress progress={70} />
//         {/* Filter Controls */}
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
//           <FormControl variant="outlined" sx={{ width: 200, height: 30 }}>
//             <InputLabel>Filter</InputLabel>
//             <Select
//               value={selectedFilter}
//               onChange={(e) => setSelectedFilter(e.target.value)}
//               label="Filter"
//             >
//               <MenuItem value="this_week">This Week</MenuItem>
//               <MenuItem value="last_month">Last Month</MenuItem>
//               <MenuItem value="overall">Overall</MenuItem>
//             </Select>
//           </FormControl>
//           <Grid2 item xs={12} sm={6} md={3}>
//             <MoodGraph habitName="Mood" data={filteredData} />
//           </Grid2>
//         </Box>
//         {/* Habit Tracking Components */}
//         <Grid2 container spacing={2} sx={{ marginTop: 3 }}>
//           <Grid2 item xs={12} sm={6} md={3}>
//             <Exercise habitName="Exercise" data={filteredData} />
//           </Grid2>
//           <Grid2 item xs={12} sm={6} md={3}>
//             <Sleep habitName="Sleep" data={filteredData} />
//           </Grid2>
//           <Grid2 item xs={12} sm={6} md={3}>
//             <Leaderboard habitName="Leaderboard" data={filteredData} />
//           </Grid2>
//           <Grid2 item xs={12} sm={6} md={3}>
//             <HealthyFood habitName="Healthy Food" data={filteredData} />
//           </Grid2>
//           <Grid2 item xs={12} sm={6} md={3}>
//             <StressLevel habitName="Stress" data={filteredData} />
//           </Grid2>
//           <Grid2 item xs={12} sm={6} md={3}>
//             <WaterConsumption habitName="Water" data={filteredData} />
//           </Grid2>
//         </Grid2>
//       </Box>
//       {/* Right Section: AI Suggestions */}
//       <Box sx={{ width: '400px', p: 3, backgroundColor: '#f4f4f4', height: '100%' }}>
//         <Typography variant="h6" sx={{ mb: 2 }}>Your Fitness Buddy</Typography>
//         <AISuggestions suggestions={suggestions} />
//       </Box>
//     </Box>
//   );
// };
// export default Dashboard;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid2, Box, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
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
import purpleOwl from './purpleowl.jpg';
const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('this_week');
  const [data, setData] = useState([]); // Store all habits data
  const [filteredData, setFilteredData] = useState([]);
  const [suggestions, setSuggestions] = useState([]); // Store AI suggestions
  const [loadingSuggestions, setLoadingSuggestions] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state for suggestions API
  // Fetching habits from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/habits');
        setData(response.data);
        setFilteredData(response.data); //filtered data
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };
    fetchData();
  }, []);
  // Fetching AI suggestions from the API
  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/suggestions');
        const data = response.data; 
        console.log(data);
        const temp={
          "content": "Hoo-hoo! Dr. Owly here, your wise and witty health coach, peering through the forest of your health data for Wed, Jan 15, 2025.  I see some intriguing entries, and together, we can refine your path towards wellness.\n\nFirst, let's address that ambitious sleep goal. Two hours of sleep per night? Even we owls, masters of the night, require more rest than that!  While I admire your drive for efficiency, a mere two hours of sleep will leave you hoo-ting mad and unable to function at your peak. Humans generally need 7-9 hours of sleep for optimal health. Let's adjust that goal to something more sustainable, perhaps closer to 7-8 hours, which you're already achieving.  A consistent sleep schedule can work wonders!  Try going to bed and waking up around the same time each day to regulate your body's natural rhythm.\n\nYour exercise regimen looks excellent!  45 minutes of daily exercise is commendable.  Keep up the great work!  Variety is the spice of life, so consider exploring different activities to keep things interesting and challenge different muscle groups.\n\nI see you're consuming healthy food – hoo-ray!  Maintaining a balanced diet is vital for overall well-being. Remember to listen to your body and provide it with the nutrients it needs to thrive.\n\nA good mood is a treasure!  Keep those positive vibes flowing.  Engage in activities that bring you joy and connect with loved ones.\n\nNow, about your water intake.  Four cups are a good start, but your goal of 23 cups is... ambitious, to say the least.  While adequate hydration is crucial, overhydration can be harmful.  A more realistic goal would be closer to 8-10 cups of water per day.  Listen to your body’s thirst cues and spread your water intake throughout the day.\n\nFinally, your stress level is reported as low, which is fantastic. However, your goal is listed as \"qwert.\" I'm unsure what that means. Could you clarify your stress management goals?  Perhaps you'd like to explore meditation, mindfulness, or other relaxation techniques.  I can offer personalized recommendations once I understand your intentions.\n\nOverall, you're on andfulness, or other relaxation techniques.  I can offer personalized recommendations once I understand your intentions.\n\nOverall, you're on a good path.  Remember, small, sustainable changes lead to significant long-term improvements. Don't hesitate to ask if you have any more questions. Hoo-hoo!\n",
          "processingTime": 13160.128929,
          "processingId": "8aa44d8b-b15c-4c60-8cef-d853c02df91a",
          "processingCount": 728,
          "conversation_id": "4596dc57-8388-41b1-af07-d9f1b9be99ac_conv_1737046255393",
          "model": "aicon-v4-large-160824"
      }
       // setSuggestions(data.suggestions || []); // Fallback to an empty array
       setSuggestions(data.suggestions||[]);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
        setSuggestions([]); // Handle errors gracefully
      }
    };
    fetchSuggestions();
  }, []);
  
  // Filter data based on the selected filter
  useEffect(() => {
    if (data.length === 0) return;
    const today = new Date();
    let startDate;
    if (selectedFilter === 'this_week') {
      const dayOfWeek = today.getDay();
      startDate = new Date(today);
      startDate.setDate(today.getDate() - dayOfWeek); // Set to last Monday
    } else if (selectedFilter === 'last_month') {
      startDate = new Date(today);
      startDate.setDate(today.getDate() - 30); // Set to 30 days ago
    } else {
      setFilteredData(data);
      return;
    }
    const filtered = data.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate;
    });
    setFilteredData(filtered);
  }, [selectedFilter, data]);
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Left Section: Graphs */}
      <LeftNavBar />
      <Box sx={{ flex: 1 }}>
        <TopBanner />
        <OverallProgress progress={70} />
        {/* Filter Controls */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <FormControl variant="outlined" sx={{ width: 200, height: 30 }}>
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
        <Box
                sx={{
                  position: 'static',
                  bottom: 20, // Adjust the distance from the bottom
                  width: '100%',
                  backgroundColor: '#e9e9e3',
                  p: 2,
                }}
              >
        {loadingSuggestions ? (
          <Typography>'Hoot! 🌙 It’s time to unwind. Meditate for 5 minutes daily to sharpen your focus and bring peace to your busy mind.',
            <br></br><br></br> 'Hoo, hooo! 🦉 Your body craves water, just like a thirsty owl in the forest. Increase your water intake to stay energized and refreshed!',
            <br></br><br></br>'Sleep like a wise owl under the moonlight 🌜. Aim for at least 7 hours of restful sleep tonight to restore your body and mind.',
          </Typography>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <AISuggestions suggestions={suggestions} />
        )}
       
                <img
                  src={purpleOwl} // Replace with your image URL
                  alt="AI Image"
                  style={{
                    width: '80%',
                    color: '#e9e9e3',
                  }}
                />
          </Box>    
      </Box>
    </Box>
  );
};
export default Dashboard;