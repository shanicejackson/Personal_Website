import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import images from './imagedata.jsx';
import '../styling/hero.css';


const Hero = () => {
  const heroRef = useRef(null);

  const scroll = (direction) => {
    if (!heroRef.current) return;
    const amount = 400;
    const left = direction === 'left' ? -amount : amount;
    heroRef.current.scrollBy({ left, behavior: 'smooth' });
  };

  const autoplayRef = useRef(null);
  
  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 4000);
  };
  
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };
  // large top-right carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const wrappedNext = () => { next(); startAutoplay(); };
  const wrappedPrev = () => { prev(); startAutoplay(); };
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="hero">
      <div className="container">
        <header className="hero-header">
          <div className="hero-content">
            <h1>SHANICE'S WEBSITE</h1>
            <h2>Perseverance</h2>
          </div>

          <div className="hero-large-carousel" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
            <button className="carousel-btn prev" onClick={wrappedPrev} aria-label="Previous">&#8592;</button>
            <div className="carousel-viewport">
              <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((img) => (
                  <div className="carousel-slide" key={img.id}>
                    <img src={img.src} alt={img.alt} onError={(e) => {
                      if (!e.currentTarget.dataset.fallback) {
                        e.currentTarget.dataset.fallback = 'true';
                        e.currentTarget.src = '/images/placeholder.jpg';
                      } else {
                        e.currentTarget.style.display = 'none';
                      }
                    }} />
                  </div>
                ))}
              </div>
            </div>
            <button className="carousel-btn next" onClick={wrappedNext} aria-label="Next">&#8594;</button>
          </div>
        </header>

        <div className="hero-cta">
          <Link className="link-button" to="/portfolio">Open Portfolio</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;