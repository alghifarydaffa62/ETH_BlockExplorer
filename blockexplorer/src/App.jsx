import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import BlockDetail from './pages/blockDetail'
import './App.css'

function App() {
    return(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/block/:id' element={<BlockDetail />}/>
      </Routes>
    )
}

export default App
