import React from 'react';
import './CSS.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Swathi',
      text: 'Pastel Perks is my go-to place for coffee. The ambiance is great, and the staff is friendly!',
      date: 'January 2024',
    },
    {
      name: 'Kaviya',
      text: 'I love the variety of drinks! The iced mocha is my favorite. Highly recommend this place.',
      date: 'February 2024',
    },
    {
      name: 'Mirudhula',
      text: 'A perfect place to unwind and enjoy a hot cup of coffee. The pastries are also fantastic.',
      date: 'March 2024',
    },
  ];

  return (
    <>

      <section style={{ padding: '20px' }}>
        <h2>What Our Customers Say</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} style={styles.card}>
              <p><strong>{testimonial.name}</strong></p>
              <p>{testimonial.text}</p>
              <p><i>{testimonial.date}</i></p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

const styles = {
  card: {
    backgroundColor:'lightblue',
    borderRadius: '8px',
    boxShadow: '0 5px 5px 5px',
    padding: '20px',
    margin: '10px',
    maxWidth: '300px',
    width: '100%',
    textAlign: 'center',
  },
};

export default Testimonials;
