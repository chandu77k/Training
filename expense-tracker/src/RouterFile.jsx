import DataEntry from './DataEntry';
import TableFormat from './TableFormat';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
const RouterFile = () => {
    const [data, setData] = useState([]);
    const [editEntry, setEditEntry] = useState(null);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('extraData')) || [];
        setData(storedData);
    }, []);

    const saveLocalData = (entries) => {
        localStorage.setItem('extraData',JSON.stringify(entries));
        setData(entries);
    }
    return (
        <>
        <Router>
            <Routes>
                <Route path='/' element={<TableFormat data={data} setData={saveLocalData} setEditEntry={setEditEntry}/>} />
                <Route path='/DataEntry' element={<DataEntry data={data} setData={saveLocalData} editEntry={editEntry}/>} />
            </Routes>
        </Router>
        </>
    )
}
export default RouterFile;