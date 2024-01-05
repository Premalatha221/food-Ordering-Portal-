import React from 'react';

const FunnyFoodQuotes = () => {
  return (
    <section style={styles.quotesSection}>
     

      <div style={{ ...styles.quote, backgroundColor: '#ffcc80' }}>
        <p style={styles.quoteText}>"Food is important. People who say otherwise are probably not very good at cooking or just need a Snickers."</p>
        <p style={styles.quoteAuthor}>- Unknown</p>
      </div>
    </section>
  );
};

const styles = {
  quotesSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '30px 0',
  },
  quote: {
    maxWidth: '600px',
    padding: '20px',
    borderRadius: '8px',
    margin: '15px 0',
    textAlign: 'center',
  },
  quoteText: {
    fontSize: '1.2em',
    marginBottom: '10px',
  },
  quoteAuthor: {
    fontStyle: 'italic',
    color: '#555',
  },
};

export default FunnyFoodQuotes;
