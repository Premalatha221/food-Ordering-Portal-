import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Eat24</h1>
      <p>Discover a World of Flavors, Delivered to Your Doorstep</p>

      <section style={styles.featuresSection}>
        <div style={{ ...styles.feature, backgroundColor: '#e1f5fe' }}>
          <h2>Vast Culinary Choices</h2>
          <p>Explore a diverse menu featuring cuisines from around the world.</p>
        </div>

        <div style={{ ...styles.feature, backgroundColor: '#ffcc00' }}>
          <h2>Convenient Ordering</h2>
          <p>Our user-friendly platform ensures a seamless ordering process.</p>
        </div>

        <div style={{ ...styles.feature, backgroundColor: '#ffd180' }}>
          <h2>Quick and Reliable Delivery</h2>
          <p>Experience swift and reliable delivery services.</p>
        </div>
      </section>

      

      <section style={styles.communitySection}>
        <h2>Join Our Community</h2>
        <p style={styles.greenParagraph}>Connect with fellow food enthusiasts, share your favorite meals, and stay updated on the latest additions to our menu.</p>
      </section>

      <section style={styles.readyToIndulgeSection}>
        <h2>Ready to Indulge?</h2>
        <p style={styles.greenParagraph}>Order now and treat yourself to a culinary journey like never before. Join with us and elevate your dining experience today!</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  featuresSection: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '30px 0',
  },
  feature: {
    flex: '1',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '0 10px',
  },
  howItWorksSection: {
    margin: '30px 0',
  },
  communitySection: {
    margin: '30px 0',
  },
  readyToIndulgeSection: {
    margin: '30px 0',
  },
  greenParagraph: {
    color: '#45a049',
  },
  heading: {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: 'black',  // Green color
    marginBottom: '10px',
  },
};

export default HomePage;
