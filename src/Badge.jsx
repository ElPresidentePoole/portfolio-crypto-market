import { simplifyValue, isObjectEmpty } from './Utility.js';

export default function Badge({ coinMap, coinListings, currencyName, currencyIcon }) {
  if (isObjectEmpty(coinMap) || isObjectEmpty(coinListings)) {
    // loading stub
    return (<div className="p-3">
                <p>Fetching...</p>
              <div className="ratio ratio-1x1">
                <img className="p-3 coin-image" src={currencyIcon}/>
              </div>
                <p>Please wait...</p>
            </div>);
  } else {
  const currencyID = coinMap.data.find((e) => e.name === currencyName).id;
  const currencySymbol = coinMap.data.find((e) => e.id === currencyID).symbol;
  const usdEquivilent = simplifyValue(coinListings.data.find((e) => e.id === currencyID).quote.USD.price);

    return (
      <div className="p-3">
          <p>{currencyName}</p>
              <div className="ratio ratio-1x1">
                <img className="p-3 coin-image" src={currencyIcon}/>
              </div>
          <p>1 {currencySymbol} &#x2248; {usdEquivilent.toLocaleString()} USD</p>
      </div>
    );
  }
}
