import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family-owned Mediterranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Link to="/reservations">
          <button className="btn-primary">Reserve a Table</button>
        </Link>
      </div>
      <div className="hero-image">
     <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400" alt="Little Lemon signature dish" />
      </div>
    </section>
  );
}

export default Hero;