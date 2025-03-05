import { useState } from 'react'
import thor from './assets/thorHammer.png'
import thunder from './assets/thunder.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function decrement(){
    setCount((count)=>count-1)
  }

  return (
    <>
      <div>

        <a href="https://vite.dev" target="_blank">
          <img src={thunder} className="logo" alt="Thunder logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={thor} className="logo react" alt="Hammer logo" />
        </a>
      </div>

      <div className="card">
      <button>
          count is {count}
        </button><br/><br/>
        <button onClick={() => setCount((count) => count + 1)}>
        Click to Increase
        </button><br/><br/>
        <button onClick={decrement}>Click to Decrease</button>
      </div>
    </>
  )
}

export default App
