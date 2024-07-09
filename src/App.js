import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'examen_parcial2' && password === 'Voyporel100') {
      alert('Inicio de sesión exitoso!');
      window.location.href = 'https://goosecampagne.projectsutd.online/parcial1/';
    } else {
      alert('Credenciales incorrectas. Por favor, intente de nuevo.');
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
