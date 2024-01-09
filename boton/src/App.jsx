import { useState } from 'react'

import './App.css'


function App() {
  const [count,setcount] = useState(0);
  return (
    <>
      <div className="card">
        <button onClick={() => {setcount((count)=> count+1)} }>
         Clicks {count}
        </button>
        <button onClick={() => {setcount((count)=> 0)}}>
          Reiniciar 
        </button>
      </div>
    </>
  )
}

export default App
