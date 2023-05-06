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
        console.error("Couldn't fetch coin map from api call!");
      }
    }

    async function fetchCoinListings() {
      try {
        const data = await getLatestMarketInfo();
        setCoinListings(data);
      } catch (e) {
        console.error("Couldn't fetch coin listings from api call!");
      }
    }

    fetchCoinMap();
    fetchCoinListings();
  }, []);

    return (
      <div className="container-fluid text-center">
        <NavigationBar />
        <div className="row">
          <div className="col-5">
            <div className="container d-sm-none d-md-block">
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
          <div className="d-table col-7 justify-content-center">
            <h1>A new world awaits</h1>
            <p>See the latest in crypto, and make your mark.</p>
            <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet massa vitae tortor. Vitae purus faucibus ornare suspendisse. Augue interdum velit euismod in pellentesque. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Aliquet bibendum enim facilisis gravida neque. Nunc mi ipsum faucibus vitae. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Quisque id diam vel quam. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Vitae proin sagittis nisl rhoncus. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Aliquam ultrices sagittis orci a scelerisque purus semper. Integer malesuada nunc vel risus commodo viverra. Quisque sagittis purus sit amet volutpat consequat mauris. Pretium quam vulputate dignissim suspendisse in est ante in nibh. Donec pretium vulputate sapien nec. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae.

Lacus vestibulum sed arcu non odio euismod. Venenatis tellus in metus vulputate eu scelerisque felis. Amet luctus venenatis lectus magna fringilla urna. Gravida rutrum quisque non tellus orci ac auctor augue mauris. Mi sit amet mauris commodo quis. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Condimentum mattis pellentesque id nibh. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Eget duis at tellus at urna. Nibh tortor id aliquet lectus.
            </p>
          </div>
        </div>
      </div>
    )
}
