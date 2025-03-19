import { useState } from 'react'
// import './App.css'
import DataFetch from './DataFetch'
import TableFormat from './TableFormat'
import NewUserForm from './NewUserForm';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
 const [data,setData] = useState([]);
 
  return (
    <>
    <Router>
       <DataFetch setExtractedData={setData}/>
        <Routes>
          <Route path="/" element={<TableFormat extractedData={data}/>} />
          <Route path="/addUser" element={<NewUserForm setData={setData}/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
