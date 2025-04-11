import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterFile from './components/RouterFile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterFile />
    </>
  )
}

export default App
