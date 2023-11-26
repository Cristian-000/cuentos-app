// App.js
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome';
import Story from './components/Story';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/random" element={<Story />} />
        <Route path="/categoria/:categoria" element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
