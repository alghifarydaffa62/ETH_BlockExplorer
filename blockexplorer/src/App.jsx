import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import BlockDetail from './pages/blockDetail'
import TransactionDetail from './pages/TransactionDetail'
import './App.css'

function App() {
    return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/block/:number' element={<BlockDetail />}/>
        <Route path='/transaction/:hash' element={<TransactionDetail />}/>
      </Routes>
    )
}

export default App
