/** @format */

import React, { useEffect } from 'react';
import { useState } from 'react';
import polybase from '../Assets/Polybase.svg';
import chainlink from '../Assets/Chainlink.svg';
import X from '../Assets/X.svg';
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';

function Todo() {
  const [data, setData] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  useEffect(() => {
    fetchUserData();
  }, []);
  const fetchUserData = async () => {
    await fetch(
      'https://testnet.polybase.xyz/v0/collections/pk%2F0x19048fb81d19b5e3285d29b583b9a21bdad8b423280bea15e80a2488d9ab2f2d471c9d1d84acf2e32ae0fcd62a6916b25def11fc9cbe40df3c6f5f8e8a1f458a%2FPolybaseXChainlink%2FUser/records'
    )
      .then(async (response) => {
        const dataRes = await response.json();

        return await dataRes.data;
      })
      .then((data) => {
        console.log(data);
        setSubmittedData(data);
        console.log(submittedData);
      });
  };
  let arrayFromPolybase = [];

  const handleSubmit = async (event) => {
    event.preventDefault();
    let date = new Date().getTime;
    setData(event.target.value);
    let array = [`${date}`, `${data}`];
    console.log(array);
    await DataHit(array);
  };

  async function DataHit(array) {
    let date = new Date().toString();
    let data1 = data.toString();
    console.log(date, data1);
    // const source = await handleSubmitt(array);
    // const newData = await source.data;
    // console.log(newData);
    const gasLimit = 250000;

    const provider = new ethers.providers.JsonRpcProvider(
      'https://polygon-mumbai.infura.io/v3/b08a585726a34d7aa81779b170af0fcc'
    );

    // Get private wallet key from the .env file
    const signerPrivateKey =
      '320c6ca026d3e4338a0569dedfa1c4faec7465235b32810c4e9f80f9969a296d';
    const signer = new ethers.Wallet(signerPrivateKey, provider);
    // const sourcee = await source.toString();
    // Consumer contract
    const consumerAddress = '0xf8535f1692244Ea7C30f1050cdEC7851a8cf8841';
    const subscriptionId = 1998;
    const requestGas = 5500000;
    const contractAbi = [
      {
        inputs: [
          {
            internalType: 'address',
            name: 'oracle',
            type: 'address',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        inputs: [],
        name: 'EmptyArgs',
        type: 'error',
      },
      {
        inputs: [],
        name: 'EmptySecrets',
        type: 'error',
      },
      {
        inputs: [],
        name: 'EmptySource',
        type: 'error',
      },
      {
        inputs: [],
        name: 'NoInlineSecrets',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RequestIsAlreadyPending',
        type: 'error',
      },
      {
        inputs: [],
        name: 'RequestIsNotPending',
        type: 'error',
      },
      {
        inputs: [],
        name: 'SenderIsNotRegistry',
        type: 'error',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'requestId',
            type: 'bytes32',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'result',
            type: 'bytes',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'err',
            type: 'bytes',
          },
        ],
        name: 'OCRResponse',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferRequested',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'from',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'RequestFulfilled',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'bytes32',
            name: 'id',
            type: 'bytes32',
          },
        ],
        name: 'RequestSent',
        type: 'event',
      },
      {
        inputs: [],
        name: 'acceptOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'oracleAddress',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'requestId',
            type: 'bytes32',
          },
        ],
        name: 'addSimulatedRequestId',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            components: [
              {
                internalType: 'enum Functions.Location',
                name: 'codeLocation',
                type: 'uint8',
              },
              {
                internalType: 'enum Functions.Location',
                name: 'secretsLocation',
                type: 'uint8',
              },
              {
                internalType: 'enum Functions.CodeLanguage',
                name: 'language',
                type: 'uint8',
              },
              {
                internalType: 'string',
                name: 'source',
                type: 'string',
              },
              {
                internalType: 'bytes',
                name: 'secrets',
                type: 'bytes',
              },
              {
                internalType: 'string[]',
                name: 'args',
                type: 'string[]',
              },
            ],
            internalType: 'struct Functions.Request',
            name: 'req',
            type: 'tuple',
          },
          {
            internalType: 'uint64',
            name: 'subscriptionId',
            type: 'uint64',
          },
          {
            internalType: 'uint32',
            name: 'gasLimit',
            type: 'uint32',
          },
          {
            internalType: 'uint256',
            name: 'gasPrice',
            type: 'uint256',
          },
        ],
        name: 'estimateCost',
        outputs: [
          {
            internalType: 'uint96',
            name: '',
            type: 'uint96',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: 'source',
            type: 'string',
          },
          {
            internalType: 'bytes',
            name: 'secrets',
            type: 'bytes',
          },
          {
            internalType: 'string[]',
            name: 'args',
            type: 'string[]',
          },
          {
            internalType: 'uint64',
            name: 'subscriptionId',
            type: 'uint64',
          },
          {
            internalType: 'uint32',
            name: 'gasLimit',
            type: 'uint32',
          },
        ],
        name: 'executeRequest',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getDONPublicKey',
        outputs: [
          {
            internalType: 'bytes',
            name: '',
            type: 'bytes',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'bytes32',
            name: 'requestId',
            type: 'bytes32',
          },
          {
            internalType: 'bytes',
            name: 'response',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'err',
            type: 'bytes',
          },
        ],
        name: 'handleOracleFulfillment',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [],
        name: 'latestError',
        outputs: [
          {
            internalType: 'bytes',
            name: '',
            type: 'bytes',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'latestRequestId',
        outputs: [
          {
            internalType: 'bytes32',
            name: '',
            type: 'bytes32',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'latestResponse',
        outputs: [
          {
            internalType: 'bytes',
            name: '',
            type: 'bytes',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'owner',
        outputs: [
          {
            internalType: 'address',
            name: '',
            type: 'address',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'to',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'oracle',
            type: 'address',
          },
        ],
        name: 'updateOracleAddress',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ];
    const consumerContract = new ethers.Contract(
      consumerAddress,
      contractAbi,
      signer
    );

    const someHex = '0x';
    const requestTx = await consumerContract.executeRequest(
      `const url =
  "https://testnet.polybase.xyz/v0/collections/pk%2F0x19048fb81d19b5e3285d29b583b9a21bdad8b423280bea15e80a2488d9ab2f2d471c9d1d84acf2e32ae0fcd62a6916b25def11fc9cbe40df3c6f5f8e8a1f458a%2FPolybaseXChainlink%2FUser/records"

const countryRequest = Functions.makeHttpRequest({
  url: url,
  method: "POST",
  data: {
    args: ["${date}", "${data}"],
  },
})
const countryRes = await countryRequest
const data1 = await countryRes["data"]["data"]
console.log(data1);
return Functions.encodeString(JSON.stringify(data1))
`,
      '0x',
      [], // Chainlink Functions request args
      subscriptionId, // Subscription ID
      gasLimit // Gas limit for the transaction
    );
    // const dataFromPolybase = await fetch(
    //   'https://testnet.polybase.xyz/v0/collections/pk%2F0x19048fb81d19b5e3285d29b583b9a21bdad8b423280bea15e80a2488d9ab2f2d471c9d1d84acf2e32ae0fcd62a6916b25def11fc9cbe40df3c6f5f8e8a1f458a%2FPolybaseXChainlink%2FUser/records',
    //   {
    //     method: 'GET',
    //   }
    // );
    // const jsonData = await dataFromPolybase.json();
    // arrayFromPolybase = await jsonData.data;
    // console.log(arrayFromPolybase);
    // setSubmittedData(arrayFromPolybase);
    // setTimeout(() => {
    //   // Perform the operation after the delay
    //   console.log('After 3 seconds:', submittedData);
    // }, 3000);
    // console.log(submittedData);
    // console.log(requestTx);
    await getData(subscriptionId, gasLimit, consumerContract);
  }

  async function getData(subscriptionId, gasLimit, consumerContract) {
    const getData = await consumerContract.executeRequest(
      `const url =
  "https://testnet.polybase.xyz/v0/collections/pk%2F0x19048fb81d19b5e3285d29b583b9a21bdad8b423280bea15e80a2488d9ab2f2d471c9d1d84acf2e32ae0fcd62a6916b25def11fc9cbe40df3c6f5f8e8a1f458a%2FPolybaseXChainlink%2FUser/records"
const countryRequest = Functions.makeHttpRequest({
  url: url,
  method: "GET",
})
const countryRes = await countryRequest
const data1 = await countryRes["data"]["data"] 
console.log(data1)
return Functions.encodeString(JSON.stringify(data1))
`,
      '0x',
      [], // Chainlink Functions request args
      subscriptionId, // Subscription ID
      gasLimit // Gas limit for the transaction
    );
  }

  return (
    <>
      <div
        className="sm:col-span-4"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          marginTop: '100px',
        }}>
        <div className="inline-flex">
          <img
            src={polybase}
            alt="polybase"
            style={{ maxWidth: '200px', marginRight: '50px' }}
          />

          <img
            src={X}
            style={{ maxWidth: '30px', marginRight: '50px' }}
          />

          <img
            src={chainlink}
            alt="polybase"
            style={{ maxWidth: '200px' }}
          />
        </div>
      </div>
      <div
        className="mt-2"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: '500px',
          marginTop: '75px',
        }}>
        <div className=" rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
          <input
            type="text"
            name="username"
            id="username"
            autoComplete="username"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="janesmith"
          />
        </div>
        <div>
          <button
            style={{
              marginLeft: '175px',
              marginTop: '50px',
              border: '2px solid #e74c3c', // Set border width and color
              padding: '10px 20px', // Optional: Add padding for better visual appearance
              borderRadius: '5px', // Optional: Add border radius for rounded corners
              backgroundColor: '#3498db', // Optional: Set background color
              color: 'white', // Optional: Set text color
            }}
            onClick={handleSubmit}>
            Create the task
          </button>
        </div>
        {submittedData.length > 0 && (
          <ul
            role="list"
            className="divide-y divide-gray-100">
            {submittedData?.map((person) => (
              <li
                key={person.data.id}
                className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.data.task}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Todo;
