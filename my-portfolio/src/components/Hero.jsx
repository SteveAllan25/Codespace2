import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section" style={styles.hero}>
      <div style={styles.content}>
        <img
          src="/profile.jpg" // Replace this with your actual photo path
          alt="Profile"
          style={styles.photo}
        />
        <h1 style={styles.title}>Stephen Jason Alando</h1>
        <p style={styles.tagline}>Aspiring Data Engineer | Cloud Enthusiast | Problem Solver</p>
        <div style={styles.buttons}>
          <a href="#projects" style={styles.button}>View My Work</a>
          <a href="/resume.docx" download style={{ ...styles.button, backgroundColor: '#444' }}>Download Resume</a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '90vh',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    padding: '2rem',
  },
  content: {
    maxWidth: '600px',
  },
  photo: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2.5rem',
    margin: '0.5rem 0',
  },
  tagline: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '1.5rem',
  },
  buttons: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  button: {
    textDecoration: 'none',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0077cc',
    color: '#fff',
    borderRadius: '5px',
    fontWeight: 'bold',
  }
};

export default Hero;