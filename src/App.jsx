import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import WebFundamentals from './pages/WebFundamentals'
import AdvancedWebFundamentals from './pages/AdvancedWebFundamentals'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/webfundamentals" element={<WebFundamentals />}></Route>
        <Route path="/advancedwebfundamentals" element={<AdvancedWebFundamentals />}></Route>
      </Routes>
    </>
  )
}

export default App