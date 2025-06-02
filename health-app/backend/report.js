const axios = require('axios');
const mysql = require('mysql2/promise');
const fs = require('fs');

// Function to fetch data from the database
async function fetchDataFromDatabase() {
    const dbConfig = {
        host: 'localhost',  
        user: 'root',       
        password: '13$Nupur_01@Sapar%05', 
        database: 'health', 
        port: 3306          
    };

    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log("Connected to the database.");

        // Fetch the latest habits entry
        const [habits] = await connection.query(
            'SELECT * FROM habits ORDER BY created_at DESC LIMIT 1'
        );

        // Fetch health goals for id = 1
        const [goals] = await connection.query(
            'SELECT * FROM goals WHERE id = 1 LIMIT 1'
        );

        if (!habits.length) {
            throw new Error("No data found in the habits table.");
        }
        if (!goals.length) {
            throw new Error("No data found in the goals table with id = 1.");
        }

        return { latestHabits: habits[0], healthGoals: goals[0] };
    } catch (error) {
        console.error("Database error:", error.message);
        throw error;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

// Function to send request to the WorqHat AI Content API
async function sendRequestToWorqhat() {
    console.log("Preparing to send request to WorqHat AI Content API...");
    const url = "https://api.worqhat.com/api/ai/content/v4";
    const apiKey = "sk-2ddf7123e688495f9cb215e39af15fd6"; 

    try {
        const { latestHabits, healthGoals } = await fetchDataFromDatabase();

        const prompt = `
You are a professional health and fitness consultant specializing in creating personalized reports. Using the following data provided by the user for the date ${latestHabits.created_at}, generate a detailed health and fitness report that includes:
1. A summary of the user's current health metrics.
2. A comparison between their current state and their health goals.
3. Actionable recommendations for improvement.

**User's Current Health Metrics:**
- Sleep hours per night: ${latestHabits.sleep_hours}
- Exercise per day: ${latestHabits.exercise_minutes} minutes
- Healthy food consumption: ${latestHabits.healthy_food ? "Yes" : "No"}
- Mood: ${latestHabits.mood}
- Water consumption: ${latestHabits.water} cups
- Stress level: ${latestHabits.stress_level}

**Health Goals:**
- Sleep hours per night: ${healthGoals.sleep_hours} hours
- Exercise per day: ${healthGoals.exercise_minutes} minutes
- Healthy food consumption: ${healthGoals.healthy_food ? "Yes" : "No"}
- Mood: ${healthGoals.mood}
- Water consumption: ${healthGoals.water} cups
- Stress level: ${healthGoals.stress_level}

**Report Guidelines:**
1. Present a concise summary of the user’s current habits.
2. Highlight key areas where the user meets or falls short of their goals.
3. Provide specific, professional advice tailored to help the user achieve their health objectives.
4. Use clear, actionable language and a positive tone to motivate the user.

Generate a structured and professional report that the user can refer to for actionable insights.
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

        console.log(`Response status code: ${response.status}`);
        if (response.status === 200) {
            const suggestions = response.data.text || "No suggestions returned";
            console.log("\nGenerated Health Report:");
            console.log(suggestions);

            
            fs.writeFileSync('report.json', JSON.stringify(response.data, null, 4), 'utf-8');
            console.log("Response saved to report.json");
        } else {
            console.error(`Error: ${response.status}`);
            console.error(response.data);
        }
    } catch (error) {
        console.error("An error occurred:", error.message || error);
    }
}

// Run the function
sendRequestToWorqhat();
