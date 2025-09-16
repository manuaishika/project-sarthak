import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Community Health Camp",
      date: "March 15, 2024",
      location: "Central Park",
      description: "Free health checkups and medical consultations for children and families in our community.",
      image: "health-camp"
    },
    {
      id: 2,
      title: "Education Workshop",
      date: "March 22, 2024",
      location: "Community Center",
      description: "Interactive learning sessions focusing on STEM education for underprivileged children.",
      image: "education-workshop"
    },
    {
      id: 3,
      title: "Sports Day",
      date: "April 5, 2024",
      location: "Local School Ground",
      description: "Fun sports activities and games to promote physical fitness and teamwork among children.",
      image: "sports-day"
    }
  ];

  return (
    <section id="events" className="events section">
      <div className="container">
        <div className="events-header">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Join us in making a difference. Participate in our upcoming events and help us create positive change in our community.
          </p>
        </div>
        
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <div className={`event-icon ${event.image}`}>
                  {event.image === 'health-camp' && (
                    <div className="health-icon">
                      <div className="cross"></div>
                      <div className="cross vertical"></div>
                    </div>
                  )}
                  {event.image === 'education-workshop' && (
                    <div className="book-icon">
                      <div className="book"></div>
                      <div className="book-pages"></div>
                    </div>
                  )}
                  {event.image === 'sports-day' && (
                    <div className="ball-icon">
                      <div className="ball"></div>
                      <div className="ball-stripes"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="event-content">
                <div className="event-date">{event.date}</div>
                <h3 className="event-title">{event.title}</h3>
                <div className="event-location">
                  <span className="location-icon">📍</span>
                  {event.location}
                </div>
                <p className="event-description">{event.description}</p>
                <button className="btn btn-primary">Join Event</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="events-cta">
          <h3>Want to stay updated?</h3>
          <p>Subscribe to our newsletter for the latest events and updates.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" className="email-input" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
