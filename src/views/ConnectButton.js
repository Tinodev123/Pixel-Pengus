import React from 'react';

const ConnectButton = () => {
  const connectWithPhantom = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        // Connect to Phantom Wallet
        await window.solana.connect();
        console.log('Connected to Phantom Wallet!');
      } catch (error) {
        console.error('Error connecting to Phantom Wallet:', error.message);
      }
    } else {
      console.error('Phantom Wallet not detected. Make sure it is installed.');
    }
  };

  return (
    <div>
      <button className="home-login button" onClick={connectWithPhantom}>Connect with Phantom Wallet</button>
    </div>
  );
};

export default ConnectButton;
