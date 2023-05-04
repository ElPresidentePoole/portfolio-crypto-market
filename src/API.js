import axios from 'axios';
import { API_KEY } from './API.config.js';

const myAxios = axios.create();
// export const COIN_MAP = getCoinMap();

export async function getCoinMap() {
  try {
    const promise = await axios.get("/api/v1/cryptocurrency/map", {headers: {"X-CMC_PRO_API_KEY": API_KEY}});
    return promise.data;
  } catch (error) {
    console.error(error);
    return {};
  }
}

export async function getLatestMarketInfo() {
  try {
    const response = await axios.get('/api/v1/cryptocurrency/listings/latest', {headers: {"X-CMC_PRO_API_KEY": API_KEY}});
    // response.data.data.forEach(item => console.log(`${item.name} (${item.symbol}) ID: ${item.id}`));
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// export default function testAxios() {
//   axios.get("/api/v1/cryptocurrency/listings/latest").then((response) => {
//     console.log(response);
//   }).catch((error) => {
//     console.log(error);
//   }).finally(() => {
//     console.log("Done with axios!");
//   });
// }
