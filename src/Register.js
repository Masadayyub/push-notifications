import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotification } from './NotificationProvider';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const triggerNotification = useNotification();

  const handleRegister = () => {
    // Add your registration logic here (backend integration)
    // For simplicity, we'll just navigate to the home page.
    navigate('/home');

    // Set showNotification to true after successful registration
    triggerNotification();
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
