const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

// GET /api - Test API Route
app.get("/api", (req, res) => {
    res.json({ message: "API is working!" });
});

// POST /api - Process Data
app.post("/api", (req, res) => {
    const { data } = req.body;
    
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const numbers = data.filter(item => !isNaN(item));  // Extract numbers
    const alphabets = data.filter(item => isNaN(item)); // Extract alphabets
    const highest_alphabet = alphabets.length ? [alphabets.sort().reverse()[0]] : [];

    res.json({
        is_success: true,
        user_id: "your_name_ddmmyyyy", // Replace with actual name and date of birth
        email: "your_email@example.com", // Replace with your email
        roll_number: "your_roll_number", // Replace with your roll number
        numbers,
        alphabets,
        highest_alphabet
    });
});

// Server Configuration
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
