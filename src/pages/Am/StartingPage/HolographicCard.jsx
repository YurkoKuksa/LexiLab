import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './HolographicCard.css';

const HolographicCard = ({ title = 'American English' }) => {
  const cardRef = useRef(null);
  const navigate = useNavigate();
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [name, setName] = useState('');

  const handleMouseMove = e => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / width - 0.5) * 30;
    const rotateX = (y / height - 0.5) * -30;

    setRotation({ x: rotateX, y: rotateY });
    setMousePosition({ x: x, y: y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setMousePosition({ x: 0, y: 0 });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim()) {
      navigate('/am', { state: { name } });
    }
  };

  return (
    <div className="holo-container">
      <div
        ref={cardRef}
        className={`holo-card ${isHovered ? 'hovered' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        }}
      >
        <div
          className="holo-card-inner"
          style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          <div className="holo-glass"></div>
          <div className="holo-shine"></div>
          <div className="holo-border"></div>

          <div className="holo-content">
            <h2 className="holo-title" data-text={title}>
              {title}
            </h2>

            <form onSubmit={handleSubmit} className="holo-form">
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Введіть своє ім'я"
                className="holo-input"
                required
              />

              <button type="submit" className="holo-button">
                <span>Далі</span>
                <svg
                  className="holo-button-arrow"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>

          <div className="holo-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="holo-particle"
                style={{
                  '--delay': `${Math.random() * 5}s`,
                  '--duration': `${3 + Math.random() * 4}s`,
                  '--size': `${3 + Math.random() * 6}px`,
                  '--x': `${Math.random() * 100}%`,
                  '--y': `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div
          className="holo-shadow"
          style={{
            transform: `translateX(${rotation.y * 0.5}px) translateY(${
              rotation.x * 0.5
            }px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default HolographicCard;
