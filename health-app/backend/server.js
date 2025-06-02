// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = 3001; // Server port

// const { sendRequest } = require('./sendRequest');
// // const { sendRequestToWorqhat} = require()

// // Middleware
// app.use(cors()); // Allows cross-origin requests
// app.use(bodyParser.json()); // Parses JSON data in request bodies

// // MySQL Database Connection
// const db = mysql.createConnection({
//     host: 'localhost', // Your MySQL host
//     user: 'root', // Your MySQL username
//     password: '13$Nupur_01@Sapar%05', // Your MySQL password
//     database: 'health', // Your database name
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL:', err.message);
//     } else {
//         console.log('Connected to MySQL');
//     }
// });

// // API Endpoints

// // Fetch all goals
// app.get('/goals', (req, res) => {
//     const sql = 'SELECT * FROM goals';
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error('Error fetching goals:', err.message);
//             res.status(500).send(err);
//         } else {
//             res.json(results);
//         }
//     });
// });

// // Fetch all habits
// app.get('/habits', (req, res) => {
//     const sql = 'SELECT * FROM habits';
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error('Error fetching habits:', err.message);
//             res.status(500).send(err);
//         } else {
//             res.json(results);
//         }
//     });
// });

// // Fetch all user info
// app.get('/user_info', (req, res) => {
//     const sql = 'SELECT * FROM user_info';
//     db.query(sql, (err, results) => {
//         if (err) {
//             console.error('Error fetching user info:', err.message);
//             res.status(500).send(err);
//         } else {
//             res.json(results);
//         }
//     });
// });

// // // Fetch AI Suggestions
// // app.get('/api/suggestions', async (req, res) => {
// //     try {
// //         // Fetch the latest habits entry
// //         const [habits] = await db.promise().query(
// //             'SELECT * FROM habits ORDER BY created_at DESC LIMIT 1'
// //         );

// //         // Fetch health goals for id = 1
// //         const [goals] = await db.promise().query(
// //             'SELECT * FROM goals WHERE id = 1 LIMIT 1'
// //         );

// //         if (habits.length === 0 || goals.length === 0) {
// //             return res.status(404).json({ error: 'No data found in habits or goals table.' });
// //         }

// //         const latestHabits = habits[0];
// //         const healthGoals = goals[0];

// //         // Create the AI prompt
// //         const prompt = `
// //         You are a wise and witty health coach who is an owl avatar. A user provided the following information about their health for ${latestHabits.created_at}:
// //         - Sleep hours per night: ${latestHabits.sleep_hours} (Goal: ${healthGoals.sleep_hours} hours)
// //         - Exercise per day: ${latestHabits.exercise_minutes} minutes (Goal: ${healthGoals.exercise_minutes} minutes)
// //         - Healthy food: ${latestHabits.healthy_food ? 'Yes' : 'No'} (Goal: ${healthGoals.healthy_food ? 'Yes' : 'No'})
// //         - Mood: ${latestHabits.mood} (Goal: ${healthGoals.mood})
// //         - Water consumed: ${latestHabits.water} cups (Goal: ${healthGoals.water} cups)
// //         - Stress level: ${latestHabits.stress_level} (Goal: ${healthGoals.stress_level})
// //         As "Dr. Owly", the health expert, provide detailed, friendly, and personalized suggestions to help the user improve their health and achieve their goals. Your advice should be insightful, encouraging, and reflect the wisdom of an owl.
// //         `;

// //         // Call the WorqHat API
// //         const response = await axios.post(
// //             'https://api.worqhat.com/api/ai/content/v4',
// //             {
// //                 model: 'aicon-v4-large-160824',
// //                 question: prompt,
// //                 stream_data: 'false',
// //             },
// //             {
// //                 headers: {
// //                     Authorization: `Bearer sk-2ddf7123e688495f9cb215e39af15fd6`,
// //                     'Content-Type': 'application/json',
// //                 },
// //             }
// //         );

// //         if (response.status === 200) {
// //             const suggestions = response.data.text || 'No suggestions returned';
// //             res.json({ suggestions });
// //         } else {
// //             res.status(response.status).json({ error: response.data });
// //         }
// //     } catch (error) {
// //         console.error('Error fetching AI suggestions:', error.message || error);
// //         res.status(500).json({ error: 'Failed to fetch AI suggestions.' });
// //     }
// // });

// // Fetch AI Suggestions using sendRequest



// // Add a new habit
// app.post('/habits', (req, res) => {
//     const { user_id, exercise_minutes, healthy_food, sleep_hours, stress_level, water, mood } = req.body;
//     const sql = `INSERT INTO habits (user_id, exercise_minut    es, healthy_food, sleep_hours, stress_level, water, mood)
//                  VALUES (?, ?, ?, ?, ?, ?, ?)`;
//     db.query(sql, [user_id, exercise_minutes, healthy_food, sleep_hours, stress_level, water, mood], (err, result) => {
//         if (err) {
//             console.error('Error inserting habit data:', err.message);
//             res.status(500).send(err);
//         } else {
//             res.json({ message: 'Habit added successfully', id: result.insertId });
//         }
//     });
// });

// // Add a new goal
// app.post('/goals', (req, res) => {
//     console.log('Goals Submitted:', req.body); // Log received data
//     const { sleep_hours, exercise_minutes, healthy_food, mood, water, stress_level } = req.body;

//     const sql = `INSERT INTO goals (sleep_hours, exercise_minutes, healthy_food, mood, water, stress_level)
//                  VALUES (?, ?, ?, ?, ?, ?)`;
//     db.query(sql, [sleep_hours, exercise_minutes, healthy_food, mood, water, stress_level], (err, result) => {
//         if (err) {
//             console.error('Error inserting goals:', err.message);
//             res.status(500).json({ error: 'Failed to submit goals.' });
//         } else {
//             res.status(200).json({ message: 'Goals added successfully!', id: result.insertId });
//         }
//     });
// });


// // Add new user info
// app.post('/user_info', (req, res) => {
//     console.log('User Info Submitted:', req.body); // Log received data
//     const { age, gender, height, weight } = req.body;

//     const sql = `INSERT INTO user_info (age, gender, height, weight) VALUES (?, ?, ?, ?)`;
//     db.query(sql, [age, gender, height, weight], (err, result) => {
//         if (err) {
//             console.error('Error inserting user info:', err.message);
//             res.status(500).json({ error: 'Failed to submit user info.' });
//         } else {
//             res.status(200).json({ message: 'User info added successfully!', id: result.insertId });
//         }
//     });
// });


// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });


const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sendRequest } = require('./sendRequest'); 

const app = express();
const PORT = 3001; // Server port


app.use(cors()); 
app.use(bodyParser.json()); 

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: '13$Nupur_01@Sapar%05', 
    database: 'health', 
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL');
    }
});



// Fetching all goals
app.get('/goals', (req, res) => {
    const sql = 'SELECT * FROM goals';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching goals:', err.message);
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Fetching all habits
app.get('/habits', (req, res) => {
    const sql = 'SELECT * FROM habits';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching habits:', err.message);
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Fetching all user info
app.get('/user_info', (req, res) => {
    const sql = 'SELECT * FROM user_info';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching user info:', err.message);
            res.status(500).send(err);
        } else {
            res.json(results);
        }
    });
});

// Fetching AI Suggestions using sendRequest
app.get('/api/suggestions', async (req, res) => {
    try {
        // Use sendRequest to handle the process
        await sendRequest(); 
        res.status(200).json({ message: 'Suggestions fetched successfully. Check console for details.' });
    } catch (error) {
        console.error('Error in /api/suggestions:', error.message || error);
        res.status(500).json({ error: 'Failed to fetch AI suggestions.' });
    }
});

// Add a new habit
app.post('/habits', (req, res) => {
    const { user_id, exercise_minutes, healthy_food, sleep_hours, stress_level, water, mood } = req.body;
    const sql = `INSERT INTO habits (user_id, exercise_minutes, healthy_food, sleep_hours, stress_level, water, mood)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [user_id, exercise_minutes, healthy_food, sleep_hours, stress_level, water, mood], (err, result) => {
        if (err) {
            console.error('Error inserting habit data:', err.message);
            res.status(500).send(err);
        } else {
            res.json({ message: 'Habit added successfully', id: result.insertId });
        }
    });
});

//new goal
app.post('/goals', (req, res) => {
    const { sleep_hours, exercise_minutes, healthy_food, mood, water, stress_level } = req.body;

    const sql = `INSERT INTO goals (sleep_hours, exercise_minutes, healthy_food, mood, water, stress_level)
                 VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [sleep_hours, exercise_minutes, healthy_food, mood, water, stress_level], (err, result) => {
        if (err) {
            console.error('Error inserting goals:', err.message);
            res.status(500).json({ error: 'Failed to submit goals.' });
        } else {
            res.status(200).json({ message: 'Goals added successfully!', id: result.insertId });
        }
    });
});

//new userinfo
app.post('/user_info', (req, res) => {
    const { age, gender, height, weight } = req.body;

    const sql = `INSERT INTO user_info (age, gender, height, weight) VALUES (?, ?, ?, ?)`;
    db.query(sql, [age, gender, height, weight], (err, result) => {
        if (err) {
            console.error('Error inserting user info:', err.message);
            res.status(500).json({ error: 'Failed to submit user info.' });
        } else {
            res.status(200).json({ message: 'User info added successfully!', id: result.insertId });
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
