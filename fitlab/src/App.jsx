
import './App.css'
import { useState } from 'react'
import Home from './pages/home/Home';

function App() {
  const [state , setState] = useState();
              
  return (
   <div className="App">
    <Home/>
   </div>
  )
}

export default App
