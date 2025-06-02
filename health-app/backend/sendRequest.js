require('dotenv').config();
const axios = require('axios');
const mysql = require('mysql2/promise');

async function fetchDataFromDatabase() {
    const dbConfig = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT
    };

    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log("Connected to the database.");

        const [habits] = await connection.query(
            'SELECT * FROM habits ORDER BY created_at DESC LIMIT 1'
        );

        const [goals] = await connection.query(
            'SELECT * FROM goals WHERE id = 1 LIMIT 1'
        );

        if (habits.length === 0) {
            throw new Error("No data found in the habits table.");
        }
        if (goals.length === 0) {
            throw new Error("No data found in the goals table with id = 1.");
        }

        return { latestHabits: habits[0], healthGoals: goals[0] };

    } catch (error) {
        console.error("Database error:", error.message);
        throw error;
    } finally {
        if (connection) await connection.end();
    }
}

async function sendRequest() {
    console.log("Preparing to send request to WorqHat AI Content API...");
    const url = "https://api.worqhat.com/api/ai/content/v4";
    const apiKey = process.env.WORQHAT_API_KEY;

    try {
        const { latestHabits, healthGoals } = await fetchDataFromDatabase();

        const prompt = `
        You are a wise and witty health coach who is an owl avatar. A user provided the following information about their health for ${latestHabits.created_at}:
        - Sleep hours per night: ${latestHabits.sleep_hours} (Goal: ${healthGoals.sleep_hours} hours)
        - Exercise per day: ${latestHabits.exercise_minutes} minutes (Goal: ${healthGoals.exercise_minutes} minutes)
        - Healthy food: ${latestHabits.healthy_food ? "Yes" : "No"} (Goal: ${healthGoals.healthy_food ? "Yes" : "No"})
        - Mood: ${latestHabits.mood} (Goal: ${healthGoals.mood})
        - Water consumed: ${latestHabits.water} cups (Goal: ${healthGoals.water} cups)
        - Stress level: ${latestHabits.stress_level} (Goal: ${healthGoals.stress_level})
        
        As "Dr. Owly", the health expert, provide detailed, friendly, and personalized suggestions to help the user improve their health and achieve their goals. Your advice should be insightful, encouraging, and reflect the wisdom of an owl.
        `;

        const payload = {
            model: "aicon-v4-nano-160824",
            question: prompt,
            stream_data: "false"
        };

        const headers = {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json"
        };

        console.log("Sending request...");
        const response = await axios.post(url, payload, { headers });

        if (response.status === 200) {
            console.log("\nDr. Owly's Suggestions:");
            console.log(response.data.text || "No suggestions returned");

            console.log("\nFull Response:");
            console.log(JSON.stringify(response.data, null, 4));
        } else {
            console.error(`Error: ${response.status}`);
            console.error(response.data);
        }

    } catch (error) {
        console.error("An error occurred:", error.message || error);
    }
}

module.exports = { sendRequest };
sendRequest();
