import React from 'react';
import './CSS.css';

function Contact() {
  return (
    <>
    <section style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        {/* Left Section (Map) */}
        <div style={{ flex: '1', paddingRight: '40px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.5358499502695!2d76.75786048184503!3d30.731446409053824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feda093b0cdcb%3A0x866ff3bae83f918b!2sPastel%20Perks!5e0!3m2!1sen!2sin!4v1730982636939!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Section (Contact Details Card) */}
        <div style={{ flex: '1', paddingLeft: '20px' }}>
          <div style={styles.card}>
            <h2>Contact Us</h2>
            <p><strong>Pastel Perks</strong></p>
            <p>123 Coffee St, Trichy, India</p>
            <p>Email: info@pastelperks.com</p>
            <p>Phone: +91 123 456 7890</p>
          </div>
        </div>
      </section>
    </>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 5px 5px 5px',
    padding: '20px',
    textAlign: 'left',
    maxWidth: '350px',
    margin: '0',
    top:'0'
  }
};

export default Contact;



