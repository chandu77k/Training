import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './components/Blogs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Blogs />
    </>
  )
}

export default App
