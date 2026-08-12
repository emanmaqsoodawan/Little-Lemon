import React from 'react';
import Hero from '../components/Hero';

function Home() {
  return (
    <main>
      <Hero />
      <section className="specials">
        <h2>This Week's Specials</h2>
        <div className="specials-grid">
          <div className="special-card">
            <h3>Greek Salad</h3>
            <p>$12.99</p>
            <p>Fresh vegetables, feta cheese, and olives.</p>
          </div>
          <div className="special-card">
            <h3>Bruschetta</h3>
            <p>$5.99</p>
            <p>Grilled bread topped with tomatoes and basil.</p>
          </div>
          <div className="special-card">
            <h3>Lemon Dessert</h3>
            <p>$5.00</p>
            <p>Our famous homemade lemon cake.</p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Amazing food and great atmosphere!"</p>
            <p>- Sarah J.</p>
          </div>
          <div className="testimonial-card">
            <p>⭐⭐⭐⭐⭐</p>
            <p>"Best Mediterranean food in Chicago."</p>
            <p>- Mike T.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;