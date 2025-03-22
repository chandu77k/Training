import React, {useEffect} from "react";
import axios from 'axios';
const Fetches = ({setExtractedData}) => {
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            setExtractedData(response.data);
            localStorage.setItem('users', JSON.stringify(response.data));
        })
    },[]);

    return (localStorage.getItem('users'));
}
export default Fetches;