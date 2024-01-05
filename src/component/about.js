import React from 'react';

const AboutPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>About Eat24</h1>
      </header>

      <section style={styles.section}>
        <h2 style={styles.heading}>About Us</h2>
        <p style={styles.paragraph}>
          Welcome to our Food Ordering Portal, where we are passionate about connecting you with delightful culinary experiences. Our mission is to make ordering food a seamless and enjoyable process.
        </p>

        <p style={styles.paragraph}>
          At our Food Ordering Portal, we bring you a diverse range of cuisines and a variety of dining options. Our platform is designed to cater to your taste buds, offering a convenient and personalized food ordering experience for every occasion.
        </p>

        <p style={styles.paragraph}>
          We understand the joy that comes with savoring delicious meals, and that's why we focus on providing a user-friendly interface, reliable delivery services, and a wide selection of high-quality dishes from your favorite local restaurants.
        </p>

        <p style={styles.paragraph}>
          The  Food Ordering Portal experience is not just about ordering food; it's about enhancing your dining moments. We strive to create a community of food enthusiasts and make every meal special, whether you're celebrating, working late, or simply craving something delightful.
        </p>

        

        <p style={{ ...styles.paragraph, ...styles.highlight }}>
          Feel free to contact us with any questions or feedback. We value your input and are committed to making your food ordering experience exceptional.
        </p>
      </section>

      <footer style={styles.footer}>
        &copy; 2023 Your Food Ordering Portal. All rights reserved.
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#343a40',
    color: '#ffffff',
    padding: '1rem',
    textAlign: 'center',
  },
  section: {
    maxWidth: '800px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: 'white',
  },
  paragraph: {
    color: '#555',
    marginBottom: '15px',
  },
  highlight: {
    color: '#e44d26',
    fontWeight: 'bold',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  footer: {
    backgroundColor: '#343a40',
    color: '#ffffff',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
};

export default AboutPage;
