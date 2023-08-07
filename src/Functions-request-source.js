/** @format */

const apiResponse = await Functions.makeHttpRequest({
  url: 'https://testnet.polybase.xyz/v0/collections/pk%2F0x19048fb81d19b5e3285d29b583b9a21bdad8b423280bea15e80a2488d9ab2f2d471c9d1d84acf2e32ae0fcd62a6916b25def11fc9cbe40df3c6f5f8e8a1f458a%2FChainlink%2FUser/records',
  method: 'POST',
  data: {
    args: [new Date().toString(), 'kenil here'],
  },
  headers: 'Content-Type: application/json',
});

const { data } = apiResponse;

console.log('API response data:', JSON.stringify(data, null, 2));
console.log(Functions.encodeString(data.name));
// Return Character Name
return Functions.encodeString(data.name);
