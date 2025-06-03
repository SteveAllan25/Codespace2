import React from 'react';

const projects = [
  {
    name: 'Amani Travel Advisors',
    description: 'A travel guide app that uses Facebook login, Google Maps, and JSON data to display tourist sites.',
    technologies: ['React', 'Google Maps API', 'Facebook SDK', 'JSON'],
    link: 'https://github.com/SteveAllan25/amani-travel',
    image: '/amani-travel.png', // Make sure this image is in your public folder
  },
  {
    name: 'Student Results System',
    description: 'A system to manage and display student exam results.',
    technologies: ['Java', 'MySQL', 'Spring Boot'],
    link: 'https://github.com/SteveAllan25/student-results',
    image: '/student-results.png',
  },
];

const Projects = () => {
  return (
    <section style={styles.projects}>
      <h2 style={styles.heading}>Projects & Work Experience</h2>
      <div style={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} style={styles.card}>
            <img src={project.image} alt={project.name} style={styles.image} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  projects: {
    padding: '4rem 2rem',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  projectGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  card: {
    width: '300px',
    backgroundColor: '#f1f1f1',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'left',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginBottom: '1rem',
  },
  link: {
    display: 'inline-block',
    marginTop: '1rem',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Projects;