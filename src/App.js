import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import { NotificationProvider } from './NotificationProvider';

const App = () => {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </NotificationProvider>
  );
};

export default App;
