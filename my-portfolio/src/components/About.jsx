import React from 'react';

const About = () => {
  return (
      <section style={styles.about}>
            <h2 style={styles.heading}>About Me</h2>
                  <p style={styles.text}>
                          Hi, I'm Stephen Jason Alando — a passionate and aspiring data engineer with a strong background in computer science from Kisii University.
                                  I'm skilled in cloud technologies, data pipelines, and backend development. I've participated in hackathons by Huawei and Flutter.
                                        </p>
                                              <p style={styles.text}>
                                                      My goal is to leverage data to solve real-world problems and create scalable, efficient systems. I enjoy continuous learning and exploring emerging tech trends.
                                                            </p>
                                                                </section>
                                                                  );
                                                                  };

                                                                  const styles = {
                                                                    about: {
                                                                        padding: '4rem 2rem',
                                                                            backgroundColor: '#fff',
                                                                                color: '#333',
                                                                                    textAlign: 'center',
                                                                                      },
                                                                                        heading: {
                                                                                            fontSize: '2rem',
                                                                                                marginBottom: '1rem',
                                                                                                  },
                                                                                                    text: {
                                                                                                        maxWidth: '800px',
                                                                                                            margin: '0 auto 1.5rem',
                                                                                                                fontSize: '1.1rem',
                                                                                                                    lineHeight: '1.6',
                                                                                                                      },
                                                                                                                      };

                                                                                                                      export default About;