import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Story = () => {
  const [storySections, setStorySections] = useState([]);
  const { categoria } = useParams();

  const fetchData = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/Cristian-000/cuentos.json/main/cuentos.json');
      if (!response.ok) {
        throw new Error(`Error al cargar los datos: ${response.status}`);
      }
      const data = await response.json();

      const categoriaData = data.cuentos.find((cuento) => cuento.categoria === categoria);
      if (!categoriaData) {
        throw new Error(`No se encontraron datos para la categoría: ${categoria}`);
      }

      const tiposSecciones = categoriaData.tipos;

      const seccionesAleatorias = tiposSecciones.map((tipo) => {
        const seccionAleatoria = categoriaData.cuentos
          .map((cuento) => cuento.secciones[tipo])
          .flat()
          .sort(() => 0.5 - Math.random())
          .slice(0, 1);

        return {
          tipo,
          seccion: seccionAleatoria[0]
        };
      });

      setStorySections(seccionesAleatorias);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [categoria]);

  const handleReload = () => {
    fetchData();
  };

  return (
    <div>
      <h2>Categoría {categoria}</h2>
      {storySections.map((seccion, index) => (
        <div key={index}>
          <p>{seccion.seccion}</p>
        </div>
      ))}
      <button onClick={handleReload}>Cargar Cuento</button>
    </div>
  );
};

export default Story;
