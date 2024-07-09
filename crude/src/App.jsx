import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">

        <div className="text">
          <input type="text" />
        </div>
        <input type="text" />

        <div className="btn">
          <button>add</button>
          <button>edit</button>
          <button>delete</button>
        </div>


      </div>
    </>
  )
}

export default App
