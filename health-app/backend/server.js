const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");  // Import the cors package

const app = express();
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Update with your MySQL credentials
    password: "13$Nupur_01@Sapar%05", // Update with your MySQL password
    database: "health",
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database!");
});

// API to fetch all goals for a user
app.get("/api/goals", (req, res) => {
    const user_id = req.query.user_id; // Get user_id from query params
    const sql = "SELECT * FROM goals WHERE user_id = ?";
    db.query(sql, [user_id], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// API to fetch all habits for a user
app.get("/api/habits", (req, res) => {
    const user_id = req.query.user_id;
    const sql = "SELECT * FROM habits WHERE user_id = ?";
    db.query(sql, [user_id], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// API to save new habit data
app.post("/api/save-habit", (req, res) => {
    const { user_id, sleep_hours, exercise_minutes, calories_consumed, stress_level } = req.body;
    const sql =
        "INSERT INTO habits (user_id, sleep_hours, exercise_minutes, calories_consumed, stress_level) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [user_id, sleep_hours, exercise_minutes, calories_consumed, stress_level], (err) => {
        if (err) throw err;
        res.json({ message: "Habit saved successfully!" });
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
