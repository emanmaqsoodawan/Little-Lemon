import React from 'react';

function About() {
  return (
    <main className="about">
      <div className="about-banner">
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200" alt="Little Lemon restaurant interior" />
        <div className="about-banner-overlay">
          <h2>About Little Lemon</h2>
        </div>
      </div>
      <div className="about-text">
        <p>
          Little Lemon is a charming neighborhood bistro that serves
          simple food and classic cocktails in a lively but casual
          environment. We would love for you to join us for a
          memorable dining experience.
        </p>
        <p>
          Founded by two Italian brothers, our menu combines
          traditional Mediterranean recipes with modern culinary
          techniques.
        </p>
      </div>
    </main>
  );
}

export default About;