import React, { useState } from "react";
import axios from "axios";

function App() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");

    const handleSubmit = async () => {
        try {
            const jsonData = JSON.parse(input);
            const res = await axios.post("http://localhost:3000/bfhl", jsonData);
            setResponse(res.data);
            setError("");
        } catch (err) {
            setError("Invalid JSON or API Error");
            setResponse(null);
        }
    };

    return (
        <div>
            <h1>Full Stack Challenge</h1>
            <textarea
                rows="5"
                cols="50"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter JSON: { "data": ["A", "1", "B", "3"] }'
            />
            <button onClick={handleSubmit}>Submit</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {response && (
                <pre>{JSON.stringify(response, null, 2)}</pre>
            )}
        </div>
    );
}

export default App;
