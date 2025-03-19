const DeleteFunction = (id, data, setData) => {
    const updatedData = data.filter((item)=> item.id !== id);
    setData(updatedData);
}
export default DeleteFunction;

