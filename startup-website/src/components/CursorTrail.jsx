
import { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPoints([...points, { x: e.clientX, y: e.clientY }]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [points]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPoints(points.slice(1));
    }, 100);

    return () => clearInterval(interval);
  }, [points]);

  return (
    <>
      {points.map((point, index) => (
        <div
          key={index}
          style={{
            position: 'fixed',
            top: point.y,
            left: point.x,
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: 'rgba(139, 92, 246, 0.5)',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            opacity: (index / points.length),
          }}
        />
      ))}
    </>
  );
};

export default CursorTrail;
