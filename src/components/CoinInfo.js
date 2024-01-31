import React, { useState, useEffect } from 'react';
import CoinDetail from './CoinDetail'; 

const CoinInfo = () => {
  const [coinData, setCoinData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiURL = 'https://technical-analysis-api.com/api/v1/detail/overview?apiKey=your_api_key_here'; // Replace with your API key variable

    fetch(apiURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setCoinData(data);
      setIsLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data: ', error);
      setError(error);
      setIsLoading(false);
    });
  }, []); // The empty array means this effect runs once after the initial render

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  console.log(coinData);

  return (
    <div>
      
      <div>
        {coinData && coinData.map((coin, index) => (
          <CoinDetail key={index} coin={coin} />
        ))}
      </div>
    </div>
  );
};



export default CoinInfo;

