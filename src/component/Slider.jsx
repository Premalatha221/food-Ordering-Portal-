import React, { useEffect, useState } from 'react';

const YourComponent = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Fetch HTML content from slide.html
    fetch('slide.html')
      .then(response => response.text())
      .then(html => {
        setHtmlContent(html);

        // Execute the JavaScript code in main.js
        const script = document.createElement('script');
        script.src = './main.js'; // Adjust the path based on your project structure
        document.head.appendChild(script);
      })
      .catch(error => console.error('Error fetching HTML:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default YourComponent;
