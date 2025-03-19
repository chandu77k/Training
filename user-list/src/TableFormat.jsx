import React, {useState, useEffect} from "react";
import './App.css'
import DeleteFunction from './Delete'
import EditFunction from './Edit'
import Search from "./Search";
import { useNavigate } from "react-router-dom";
const TableFormat = ({extractedData}) => {
    const [data, setData] = useState(extractedData);
    const navigate = useNavigate();
    const NewUserForm =() =>{
        navigate ("/addUser");
    }
    useEffect(()=> {
        setData(extractedData);
    },[extractedData]);
        return(
            <>
            <Search data={extractedData} setData={setData} />
          <table>
           <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Company Name</th>
            <th>City</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) =>{ 
                return(
                <>
                    <tr key={item.id}>
                    <td className="ids">{item.id}</td>
                    <td className="items">{item.name}</td>
                    <td className="items">{item.phone}</td>
                    <td className="items">{item.company.name}</td>
                    <td className="items">{item.address.city}</td>
                    <td className="items"><button onClick={()=>EditFunction(item.id,data,setData)}>Edit</button><button onClick={()=>DeleteFunction(item.id, data, setData)}>Delete</button></td>
                    </tr>
                </>
                );
            })
        }            
        </tbody> 
    </table>
    <button onClick={NewUserForm}>Add New User</button>
    </>
    );
}
export default TableFormat;
