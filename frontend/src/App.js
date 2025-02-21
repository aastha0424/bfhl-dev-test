import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://bfhl-dev-test.onrender.com", {
        data: JSON.parse(input),
      });
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError("Error processing request.");
      setResponse(null);
    }
  };

  return (
    <div>
      <h1>Full Stack Challenge</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter JSON: { "data": ["A", "1", "B", "3"] }'
          rows="5"
          cols="50"
        />
        <button type="submit">Submit</button>
      </form>

      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default App;
