import React from 'react';

const Skills = () => {
  const technicalSkills = [
      'JavaScript', 'React', 'Node.js', 'Python', 'SQL',
          'Git', 'GitHub', 'Google Cloud', 'AWS', 'Linux'
            ];

              const softSkills = [
                  'Problem-solving', 'Communication', 'Teamwork',
                      'Adaptability', 'Time Management'
                        ];

                          return (
                              <section style={styles.skills}>
                                    <h2 style={styles.heading}>Skills</h2>

                                          <div style={styles.container}>
                                                  <div style={styles.column}>
                                                            <h3 style={styles.subheading}>Technical Skills</h3>
                                                                      <ul>
                                                                                  {technicalSkills.map((skill, index) => (
                                                                                                <li key={index} style={styles.listItem}>{skill}</li>
                                                                                                            ))}
                                                                                                                      </ul>
                                                                                                                              </div>

                                                                                                                                      <div style={styles.column}>
                                                                                                                                                <h3 style={styles.subheading}>Soft Skills</h3>
                                                                                                                                                          <ul>
                                                                                                                                                                      {softSkills.map((skill, index) => (
                                                                                                                                                                                    <li key={index} style={styles.listItem}>{skill}</li>
                                                                                                                                                                                                ))}
                                                                                                                                                                                                          </ul>
                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                            </section>
                                                                                                                                                                                                                              );
                                                                                                                                                                                                                              };

                                                                                                                                                                                                                              const styles = {
                                                                                                                                                                                                                                skills: {
                                                                                                                                                                                                                                    padding: '4rem 2rem',
                                                                                                                                                                                                                                        backgroundColor: '#f8f9fa',
                                                                                                                                                                                                                                            color: '#333',
                                                                                                                                                                                                                                                textAlign: 'center',
                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                    heading: {
                                                                                                                                                                                                                                                        fontSize: '2rem',
                                                                                                                                                                                                                                                            marginBottom: '2rem',
                                                                                                                                                                                                                                                              },
                                                                                                                                                                                                                                                                container: {
                                                                                                                                                                                                                                                                    display: 'flex',
                                                                                                                                                                                                                                                                        justifyContent: 'center',
                                                                                                                                                                                                                                                                            gap: '4rem',
                                                                                                                                                                                                                                                                                flexWrap: 'wrap',
                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                    column: {
                                                                                                                                                                                                                                                                                        minWidth: '200px',
                                                                                                                                                                                                                                                                                          },
                                                                                                                                                                                                                                                                                            subheading: {
                                                                                                                                                                                                                                                                                                fontSize: '1.5rem',
                                                                                                                                                                                                                                                                                                    marginBottom: '1rem',
                                                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                                                        listItem: {
                                                                                                                                                                                                                                                                                                            fontSize: '1.1rem',
                                                                                                                                                                                                                                                                                                                marginBottom: '0.5rem',
                                                                                                                                                                                                                                                                                                                  },
                                                                                                                                                                                                                                                                                                                  };

                                                                                                                                                                                                                                                                                                                  export default Skills;