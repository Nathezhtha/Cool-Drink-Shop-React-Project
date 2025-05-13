import React from 'react';
import cccc from './coffee.jpg';
import './CSS.css';
import bbbb from './Mission.jpg';
import aaaa from './story.jpg';

function About() {
  return (
    <>

      <section className="about-section">
        {/* Story Section */}
        <div className="about-item">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Founded with a passion for exceptional coffee and community, 
              Pastel Perks has been proudly serving Trichy since 2004. 
              Our journey began as a dream to create a welcoming space where people could gather,
              relax, and connect over a shared love for great coffee.
              From those early days to today, our goal has remained the same: to bring people together,
              one cup at a time.
            </p>
          </div>
          <img src={aaaa} alt="Our Story" className="about-image" />
        </div>

        {/* Mission Section */}
        <div className="about-item reverse">
          <img src={bbbb} alt="Our Mission" className="about-image" />
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>At Pastel Perks, we believe coffee is more than just a drink—it's an experience.
              We are dedicated to sourcing high-quality, ethically grown beans from around the world 
              and crafting each cup with care and expertise. We’re here to serve you a moment of relaxation,
              a burst of energy, or the warmth of a friendly conversation.
            </p>
          </div>
        </div>

        {/* Coffee Section */}
        <div className="about-item">
          <div className="about-text">
            <h2>Our Coffee</h2>
            <p>Our coffee beans are carefully sourced from sustainable farms in regions renowned for their distinct coffee flavors.
              We work closely with farmers who are as passionate about coffee as we are, 
              ensuring that each batch is ethically grown and harvested. From the bold richness of 
              our espresso to the delicate flavors of our specialty blends, we offer a range 
              of tastes for every palate.
            </p>
          </div>
          <img src={cccc} alt="Our Coffee" className="about-image" />
        </div>
      </section>
    </>
  );
}

export default About;
