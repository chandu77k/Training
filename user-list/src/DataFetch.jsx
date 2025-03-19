import React, {useEffect} from "react";
import axios from 'axios';
const Fetches = ({setExtractedData}) => {
    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=> {
            setExtractedData(response.data);
        })
    },[]);

    return ('');
}
export default Fetches;