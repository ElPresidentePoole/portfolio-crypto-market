import NavigationBar from './NavigationBar.jsx';
import Badge from './Badge.jsx';
import { getCoinMap, getLatestMarketInfo } from './API.js';
import { useState, useEffect } from 'react';
import ethImg from './assets/eth-diamond-purple.png';
import btcImg from './assets/bitcoin.png';

export default function LandingPage() {
  const [ coinMap, setCoinMap ] = useState({});
  const [ coinListings, setCoinListings ] = useState({});

  useEffect(() => {
    async function fetchCoinMap() {
      try {
        const data = await getCoinMap();
        setCoinMap(data);
      } catch (e) {
        console.error("Couldn't fetch coin map from api call!")
      }
    }

    async function fetchCoinListings() {
      try {
        const data = await getLatestMarketInfo();
        setCoinListings(data);
      } catch (e) {
        console.error("Couldn't fetch coin listings from api call!")
      }
    }

    fetchCoinMap();
    fetchCoinListings();
  }, []);

    return (
      <div>
        <NavigationBar />
        <h1>A new world awaits</h1>
        <p>See the latest in crypto, and make your mark.</p>
        <Badge coinMap={coinMap} coinListings={coinListings} currencyName="Ethereum" currencyIcon={ethImg} />
        <Badge coinMap={coinMap} coinListings={coinListings} currencyName="Bitcoin" currencyIcon={btcImg} />
      </div>
    )
}
