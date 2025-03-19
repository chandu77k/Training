import './App.css'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const NewUserForm = ({setData}) => {
const navigate = useNavigate();
const [name, setName] = useState('');
const [id, setId] = useState('');
const [phone, setPhone] = useState('');
const [company, setCompany] = useState('');
const [city, setCity] = useState('');

const handleNameChange = (event) => setName(event.target.value);

const handleIdChange = (event) => setId(event.target.value);

const handlePhoneChange = (event) => setPhone(event.target.value);

const handleCompanyChange = (event) => setCompany(event.target.value);

const handleCityChange = (event) => setCity(event.target.value);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(id);
        console.log(name);
        console.log(phone);
        console.log(company);
        console.log(city);
        const newUser = {id: id, name: name, phone:phone, company:{ name : company}, address:{city: city}};
        setData(prevData => [...prevData, newUser]);

        setId('');
        setName('');
        setPhone('');
        setCompany('');
        setCity('');

        navigate("/");
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="id">Id : </label>
            <input type="number" value={id} onChange={handleIdChange} required/>
            <label htmlFor="name">Name : </label>
            <input type="text" value={name} onChange={handleNameChange} required/>
            <label htmlFor="phone">Phone : </label>
            <input type="text" value={phone} onChange={handlePhoneChange} required/>
            <label htmlFor="company">Company : </label>
            <input type="text" value={company} onChange={handleCompanyChange} required/>
            <label htmlFor="city">City : </label>
            <input type="text" value={city} onChange={handleCityChange} required/><br />
            <button type="submit" id="sub">Submit</button><br />
        </form>
        </>
    )
}
export default NewUserForm;
