require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sendRequest } = require('./sendRequest');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
    } else {
        console.log('Connected to MySQL');
    }
});

// Get routes
app.get('/goals', (req, res) => {
    db.query('SELECT * FROM goals', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.get('/habits', (req, res) => {
    db.query('SELECT * FROM habits', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.get('/user_info', (req, res) => {
    db.query('SELECT * FROM user_info', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// AI suggestions route
app.get('/api/suggestions', async (req, res) => {
    try {
        await sendRequest();
        res.status(200).json({ message: 'Suggestions fetched successfully. Check console for details.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch AI suggestions.' });
    }
});

// Post routes
app.post('/habits', (req, res) => {
    const { user_id, exercise_minutes, healthy_food, sleep_hours, stress_level, water, mood } = req.body;
    const sql = `INSERT INTO habits (user_id, exercise_minutes, healthy_food, sleep_hours, stress_level, water, mood)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, [user_id, exercise_minutes, healthy_food, sleep_hours, stress_level, water, mood], (err, result) => {
        if (err) return res.status(500).send(err);
        res.json({ message: 'Habit added successfully', id: result.insertId });
    });
});

app.post('/goals', (req, res) => {
    const { sleep_hours, exercise_minutes, healthy_food, mood, water, stress_level } = req.body;
    const sql = `INSERT INTO goals (sleep_hours, exercise_minutes, healthy_food, mood, water, stress_level)
                 VALUES (?, ?, ?, ?, ?, ?)`;
    db.query(sql, [sleep_hours, exercise_minutes, healthy_food, mood, water, stress_level], (err, result) => {
        if (err) return res.status(500).json({ error: 'Failed to submit goals.' });
        res.status(200).json({ message: 'Goals added successfully!', id: result.insertId });
    });
});

app.post('/user_info', (req, res) => {
    const { age, gender, height, weight } = req.body;
    const sql = `INSERT INTO user_info (age, gender, height, weight) VALUES (?, ?, ?, ?)`;
    db.query(sql, [age, gender, height, weight], (err, result) => {
        if (err) return res.status(500).json({ error: 'Failed to submit user info.' });
        res.status(200).json({ message: 'User info added successfully!', id: result.insertId });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
