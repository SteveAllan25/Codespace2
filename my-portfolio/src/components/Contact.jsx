import React from 'react';

const Contact = () => {
  return (
    <section style={styles.contact}>
      <h2 style={styles.heading}>Contact Me</h2>
      
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required style={styles.input} />
        <input type="email" placeholder="Your Email" required style={styles.input} />
        <textarea placeholder="Your Message" required rows="5" style={styles.textarea}></textarea>
        <button type="submit" style={styles.button}>Send Message</button>
      </form>

      <div style={styles.info}>
        <p>Email: Jasonalando@gmail.com</p>
        <p>Phone: +254 706625721</p>
        <p>Location: Mombasa, Kenya</p>
        <div style={styles.socials}>
          <a href="https://www.linkedin.com/in/stephen-alando" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/SteveAllan25" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">Twitter</a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  contact: {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    color: '#333',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '500px',
    margin: '0 auto 2rem',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    margin: '0.5rem 0',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '0.8rem',
    fontSize: '1rem',
  },
  button: {
    marginTop: '1rem',
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  info: {
    fontSize: '1rem',
  },
  socials: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
};

export default Contact;