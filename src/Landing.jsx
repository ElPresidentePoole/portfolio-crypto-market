import NavigationBar from './NavigationBar.jsx';
import Badge from './Badge.jsx';
import { getCoinMap, getLatestMarketInfo } from './API.js';
import { useState, useEffect } from 'react';
import ethImg from './assets/ethereum.svg';
import btcImg from './assets/bitcoin.svg';
import xmrImg from './assets/monero.svg';
import xrpImg from './assets/xrp.svg';

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
      <div className="container-fluid text-center">
        <NavigationBar />
        <div className="row">
          <div className="col">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <Badge coinMap={coinMap} coinListings={coinListings} currencyName="Ethereum" currencyIcon={ethImg} />
                </div>
                <div className="col">
                  <Badge coinMap={coinMap} coinListings={coinListings} currencyName="Bitcoin" currencyIcon={btcImg} />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Badge coinMap={coinMap} coinListings={coinListings} currencyName="Monero" currencyIcon={xmrImg} />
                </div>
                <div className="col">
                  <Badge coinMap={coinMap} coinListings={coinListings} currencyName="XRP" currencyIcon={xrpImg} />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <h1>A new world awaits</h1>
            <p>See the latest in crypto, and make your mark.</p>
          </div>
        </div>
      </div>
    )
}
