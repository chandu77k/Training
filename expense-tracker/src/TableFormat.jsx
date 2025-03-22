import './App.css'
import { useNavigate } from 'react-router-dom';
import Search from './Search'
import Filter from './FilterCategory'
import { useEffect, useState} from 'react'
import Sorting from './sorting';
const TableFormat = ({data, setData, setEditEntry}) => {
    const navigate = useNavigate();
    const [filteredData, setFilteredData] = useState(data);
    useEffect(()=> {
        setFilteredData(data);
    },[data]);
    const clearData = () => {
        localStorage.clear();
        setData([]);
    }
    const DataEntry = () => {
        setEditEntry(null);
        localStorage.removeItem('editEntry');
        navigate('/DataEntry');
    }
    const HandleEdit = (entry) => {
        setEditEntry(entry);
        localStorage.setItem('editEntry',JSON.stringify(entry));
        navigate('/DataEntry');
    }

    const DeleteEntry = (id) => {
        const updatedData = data.filter((entry)=>entry.id!==id);
        setData(updatedData);
    }

    const TotalAmount = filteredData.reduce((acc,entry)=>acc+Number(entry.amount),0);
    return(
    <>
    <Search data={data} setFilteredData={setFilteredData} />
    <button onClick={clearData}>Clear Data</button>
    <Filter data={data} setFilteredData={setFilteredData} />
    <Sorting data={data} setFilteredData={setFilteredData} />
    <button id='total'>Total Amount Spent : {TotalAmount}</button>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Description</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {filteredData.map((entry)=>(
            <tr key={entry.id}>
                <td className="ids">{entry.id}</td>
                <td className="items">{entry.date}</td>
                <td className="items">{entry.category}</td>
                <td className="items">{entry.amount}</td>
                <td className="items">{entry.payment}</td>
                <td className="items">{entry.description}</td>
                <td className="items">
                    <button onClick={() => HandleEdit(entry)}>Edit</button>
                    <button onClick={() => DeleteEntry(entry.id)}>Delete</button>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
    <button id='addNew' onClick={DataEntry}>New Expense</button>
    </>
    );
}
export default TableFormat;