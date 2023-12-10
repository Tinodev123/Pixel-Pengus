import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SolanaPrice = () => {
  const [solPrice, setSolPrice] = useState(null);

  useEffect(() => {
    const fetchSolPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price',
          {
            params: {
              ids: 'solana',
              vs_currencies: 'usd',
            },
          }
        );

        const solPriceInUSD = response.data.solana.usd;
        setSolPrice(solPriceInUSD);
      } catch (error) {
        console.error('Error fetching Solana price:', error);
      }
    };

    // Fetch Solana price on component mount
    fetchSolPrice();

    // Fetch Solana price every minute (you can adjust the interval)
    const interval = setInterval(fetchSolPrice, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const calculatePriceFor0_1Sol = () => {
    if (solPrice !== null) {
      const priceFor0_1Sol = solPrice * 0.1;
      return priceFor0_1Sol.toFixed(2); // Adjust decimal places as needed
    }
    return 'Loading...';
  };

  return (
    <div>
      <h2>Solana Price</h2>
      <p>Current Price: ${solPrice}</p>
      <p>Price for 0.1 SOL: ${calculatePriceFor0_1Sol()}</p>
    </div>
  );
};

export default SolanaPrice;
