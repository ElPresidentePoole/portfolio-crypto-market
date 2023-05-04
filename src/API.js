import axios from 'axios';

const myAxios = axios.create({
  // baseURL: "https://sandbox-api.coinmarketcap.com/",
  headers: {"X-CMC_PRO_API_KEY": "b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c"}
});

export default function testAxios() {
let response = null;
new Promise(async (resolve, reject) => {
  try {
    response = await axios.get('/api/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      },
    });
  } catch(ex) {
    response = null;
    // error
    console.log(ex);
    reject(ex);
  }
  if (response) {
    // success
    const json = response.data;
    console.log(json);
    resolve(json);
  }
});

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
