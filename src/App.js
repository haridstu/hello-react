import { useState } from 'react';

function App() {
  const [name, setName] = useState("");
  const [greet, setGreet] = useState("");

  const handleGreet = () => setGreet(`Hello, ${name}! + darling`);

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 400  }}>
      <input 
        placeholder="Enter your name" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleGreet}>Greet</button>
      <p>{greet}</p>
    </div>
  );
}

export default App;
