const EditFunction = (id,data,setData) => {
    let itemEdit = null;
    for(let i=0;i<data.length;i++){
        if(data[i].id === id){
            itemEdit = data[i];
            break;
        }
    }

    const newName = prompt(itemEdit.name);
    const newPhone = prompt(itemEdit.phone);
    const newCompany = prompt(itemEdit.company.name);
    const newCity = prompt(itemEdit.address.city);
    if(newName && newPhone && newCompany && newCity){
        const updatedData = data.map((item)=>{
            if(item.id === id){
                return{
                    id : item.id,
                    name: newName,
                    phone: newPhone,
                    company: { name: newCompany},
                    address: { city: newCity}
                };
            }
            return item;
        });
        setData(updatedData);
    }
}
export default EditFunction;