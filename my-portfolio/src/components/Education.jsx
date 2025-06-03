import React from 'react';

const Education = () => {
  return (
    <section style={styles.education}>
      <h2 style={styles.heading}>Education</h2>

      <div style={styles.entry}>
        <h3>Kisii University</h3>
        <p><strong>Course:</strong> BSc. Computer Science</p>
        <p><strong>Expected Graduation:</strong> April 2026</p>
      </div>

      <div style={styles.entry}>
        <h3>Certifications</h3>
        <ul>
          <li>Google Cloud Certified – Associate Cloud Engineer</li>
          <li>AWS Certified Cloud Practitioner</li>
          <li>Participation in Huawei & Flutter Hackathons</li>
        </ul>
      </div>
    </section>
  );
};

const styles = {
  education: {
    padding: '4rem 2rem',
    backgroundColor: '#f8f9fa',
    color: '#333',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '2rem',
  },
  entry: {
    marginBottom: '2rem',
  },
};

export default Education;