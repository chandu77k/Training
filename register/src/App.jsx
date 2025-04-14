import { useState } from 'react'
// import './App.css'
import RouterFile from './components/RouterFile'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterFile />
    </>
  )
}

export default App
