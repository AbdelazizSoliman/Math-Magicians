import React, { useEffect, useState } from 'react';
import styles from './quotes.module.css';

const FetchData = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes',
          {
            headers: {
              'X-Api-Key': 'JvKsXTLF2gZH8Nw0TOqv4Q==mjo1zbXLgtlyTwWd',
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setQuote(data[0]?.quote || 'No quote available');
          setAuthor(data[0]?.author || 'No quote available');
        } else {
          setError('Error fetching quote');
        }
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching quote');
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles.quote}>
      <h2>Quote</h2>
      <p className={styles.quote}>{quote}</p>
      <p className={styles.author}>{author}</p>
    </div>
  );
};

export default FetchData;
