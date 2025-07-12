import { Alchemy, Network } from 'alchemy-sdk'
import { useEffect, useState } from 'react';
import './App.css'

const settings = {
  apiKey: import.meta.env.VITE_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET
}

const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState()

  useEffect(() => {
    async function getBlockNumber() {
      let latestBlock = await alchemy.core.getBlockNumber()
      setBlockNumber(latestBlock);
    }

    getBlockNumber()
  }, [])

  return (
    <>
      <h1 className='text-center text-5xl text-blue-900 font-bold'>Ethereum Block Explorer</h1>
      <h2>block number: {blockNumber}</h2>
    </>
  )
}

export default App
