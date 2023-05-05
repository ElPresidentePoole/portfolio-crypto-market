import { useState, useEffect } from 'react';
import { simplifyValue, isObjectEmpty } from './Utility.js';

export default function Badge({ coinMap, coinListings, currencyName, currencyIcon }) {
  if (isObjectEmpty(coinMap) || isObjectEmpty(coinListings)) {
    // loading stub
    return (<div className="ratio" style={{"--bs-aspect-ratio": "50%"}}>
            <p>Fetching...</p>
            <img className="img-fluid coin-image" src={currencyIcon}/>
            <p>Please wait...</p>
    </div>);
  } else {
  const currencyID = coinMap.data.find((e) => e.name === currencyName).id;
  const currencySymbol = coinMap.data.find((e) => e.id === currencyID).symbol;
  const usdEquivilent = simplifyValue(coinListings.data.find((e) => e.id === currencyID).quote.USD.price);

    return (<div className="ratio" style={{"--bs-aspect-ratio": "50%"}}>
            <p>{currencyName}</p>
            <img className="img-fluid coin-image" src={currencyIcon}/>
            <p>1 {currencySymbol} &#x2248; {usdEquivilent.toLocaleString()} USD</p>
    </div>);
  }
}
