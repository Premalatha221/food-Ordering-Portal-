import React from 'react';
import AboutPage from './about';

const HelpPage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.heading}>Help Center</h1>
      </header>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Frequently Asked Questions</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>How do I place an order?</strong><br />
            To place an order, simply browse our menu, select your desired items, and proceed to checkout.
          </li>
          <li style={styles.listItem}>
            <strong>Can I customize my order?</strong><br />
            Yes, many of our menu items allow customization. You can specify your preferences during the ordering process.
          </li>
          <li style={styles.listItem}>
            <strong>How can I track my order?</strong><br />
            Once your order is confirmed, you'll receive a tracking link via email or SMS to monitor the delivery status.
          </li>
        </ul>
      </section>
      <br></br>
      <section style={styles.section}>
        <h2 style={styles.subHeading}>Contact Us</h2>
        <p style={styles.paragraph}>
          If you have any further questions or need assistance, feel free to contact our customer support team at{' '}
          <a href="mailto:support@foodorderingportal.com" style={styles.link}>
            support@foodorderingportal.com
          </a>.
        </p>
      </section>

      <footer style={styles.footer}>
        &copy; 2023 Food Ordering Portal. All rights reserved.
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
      boxSizing: 'border-box', // Include padding and border in the total width and height
      width: '100%', // Make the container take up the full width of the screen
    },
    header: {
      backgroundColor: '#343a40',
      color: '#ffffff',
      padding: '1rem',
      textAlign: 'center',
    },
    section: {
      width: '100%', // Adjusted to take up the full width
      margin: '2rem auto',
      padding: '2rem',
      backgroundColor: '#ffffff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box', // Include padding and border in the total width and height
    },
    heading: {
      color: 'white',
    },
    subHeading: {
      color: '#343a40',
      marginBottom: '1rem',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      color: '#555',
      marginBottom: '1rem',
    },
    paragraph: {
      color: '#555',
      marginBottom: '15px',
    },
    link: {
      color: '#e44d26',
      textDecoration: 'none',
      fontWeight: 'bold',
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
export default HelpPage;  