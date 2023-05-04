import ethImg from './assets/eth-diamond-purple.png';
import { useState, useEffect } from 'react';
import { simplifyValue, isObjectEmpty } from './Utility.js';

export default function Badge({ coinMap, coinListings, currencyName, currencyIcon }) {
  if (isObjectEmpty(coinMap) || isObjectEmpty(coinListings)) {
    // loading stub
  return (<div className="badge">
            <p>Fetching...</p>
            <img className="currency-loading" src={currencyIcon}/>
            <p>Please wait...</p>
    </div>);
  } else {
  const currencyID = coinMap.data.find((e) => e.name === currencyName).id;
  const currencySymbol = coinMap.data.find((e) => e.id === currencyID).symbol;
  const usdEquivilent = simplifyValue(coinListings.data.find((e) => e.id === currencyID).quote.USD.price);

  return (<div className="badge">
            <p>{currencyName}</p>
            <img src={currencyIcon}/>
    <p>1 {currencySymbol} &#x2248; {usdEquivilent} USD</p>
    </div>);
  }
}
