import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-illustration">
            <div className="hands-heart">
              <div className="hands">
                <div className="hand hand-left"></div>
                <div className="hand hand-right"></div>
              </div>
              <div className="heart-container">
                <div className="heart-shape">
                  <div className="kids-in-heart">
                    <div className="kid-circle kid-1">
                      <div className="face"></div>
                    </div>
                    <div className="kid-circle kid-2">
                      <div className="face"></div>
                    </div>
                    <div className="kid-circle kid-3">
                      <div className="face"></div>
                    </div>
                    <div className="kid-circle kid-4">
                      <div className="face"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about-text">
            <h2 className="about-title">About us</h2>
            <p className="about-description">
              Project Sarthak is dedicated to creating meaningful change in the lives of children and families. 
              We believe that every child deserves access to quality education, healthcare, and opportunities to thrive. 
              Through our community-driven initiatives, we work tirelessly to build a brighter future where every child 
              can reach their full potential and contribute to a better world.
            </p>
            <p className="about-mission">
              Our mission is to empower children through education, provide essential resources to families in need, 
              and create sustainable solutions that address the root causes of inequality. Together, we can make 
              a lasting difference in our communities.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">500+</div>
                <div className="stat-label">Children Helped</div>
              </div>
              <div className="stat">
                <div className="stat-number">25</div>
                <div className="stat-label">Communities</div>
              </div>
              <div className="stat">
                <div className="stat-number">50</div>
                <div className="stat-label">Volunteers</div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
