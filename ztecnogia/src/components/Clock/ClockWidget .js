import React, { useState, useEffect } from 'react';
import moment from 'moment';

const ClockWidget = () => {
    const [currentTime, setCurrentTime] = useState(moment());
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentTime(moment());
      }, 1000); // Actualizar cada segundo
  
      return () => clearInterval(timer); // Limpiar el intervalo al desmontar el componente
    }, []);
  
    return (
      <div className="clock-widget">
        <h2>Fecha y Hora</h2>
        <p>{currentTime.format('dddd, MMMM Do YYYY')}</p>
        <p>{currentTime.format('h:mm:ss A')}</p>
      </div>
    );
  };
  
  export default ClockWidget;
  