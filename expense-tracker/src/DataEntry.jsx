import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const DataEntry = ({data,setData}) => {
    const [id, setId] = useState(null);
    const [date, setDate] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [payment, setPayment] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedData = localStorage.getItem('editEntry');
        if(storedData){
            const parsedEntry = JSON.parse(storedData);
            setId(parsedEntry.id);
            setDate(parsedEntry.date);
            setCategory(parsedEntry.category);
            setAmount(parsedEntry.amount);
            setPayment(parsedEntry.payment);
            setDescription(parsedEntry.description);
        }
    },[])
    

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    }

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(id!=null){
            const updatedData = data.map((entry)=>{
                if(entry.id === id){
                    return {id,date,category,amount,payment,description};
                }
                return entry;
            });
            setData(updatedData);
            localStorage.removeItem('editEntry');
        }
        else{
        let newId = 1;
        if (data.length > 0) {
            const lastItem = data[data.length - 1];
            newId = lastItem.id + 1;
        }
        const newEntry = {id: newId,date, category, amount, payment, description};
        const updatedData = [...data, newEntry];
        setData(updatedData);
       }
        navigate('/');

    };
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="dates">Date : </label>
            <input type="date" value={date} onChange={handleDateChange} required/><br />

            <label htmlFor="category">Category : </label>
            <select name="categories" id="category" value={category} onChange={handleCategoryChange} required>
                <option value="">None</option>
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="bills">Bills</option>
            </select><br />

            <label htmlFor="amount">Amount : </label>
            <input type="number" value={amount} onChange={handleAmountChange} required/><br />

            <label htmlFor="payments">Payment Method : </label>
            <select name="payments" id="payment" value={payment} onChange={handlePaymentChange} required>
                <option value="">None</option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="upi">UPI</option>
            </select><br />

            <label htmlFor="descriptions">Description :</label>
            <input type="text" placeholder="(optional)" value={description} onChange={handleDescriptionChange} /><br />

            <button type="submit">Submit</button>
        </form>
        </>
    );
}

export default DataEntry;