import React from 'react';

const CoinDetail = ({ coin }) => {
  console.log(coin);
  const { name, symbol, reddit_topic, google_trends } = coin;

  return (
    <div className="coin-detail">
      <h2>{name} ({symbol})</h2>
      <p>Reddit Topic: {reddit_topic}</p>
      <p>Google Trends: {google_trends}</p>
    </div>
  );
};

export default CoinDetail;


