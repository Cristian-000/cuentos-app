// src/components/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  console.log("Welcome Component Rendered");
  return (
    <div>
      <h1>Bienvenido a Cuentos App</h1>
      <Link to="/random">Cuento Aleatorio</Link>
      <Link to="/categoria/Aventura">Aventura</Link>
      <Link to="/categoria/Fantasía">Fantasía</Link>
    </div>
  );
};

export default Welcome;
