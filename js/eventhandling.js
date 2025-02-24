function backgroundColor(){
    document.getElementById('bgcolor').style.backgroundColor="bisque";
}

function addItem(){
    const items = document.getElementById('lists').value;
    if (items) {
        const newItem = document.createElement("li");
        newItem.textContent = items;
        document.getElementById('result').appendChild(newItem);
        document.getElementById('lists').value = "";
    }
}

function validateForm() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const errorMessage = document.getElementById('errormessage');
    errorMessage.innerHTML = "";
    if (name === "") {
      errorMessage.innerHTML += "Name should not be empty<br>";
      return false;
    }
    if (age === "") {
      errorMessage.innerHTML += "Age should not be empty<br>";
      return false;
    } else if (age <= 0) {
      errorMessage.innerHTML += "Age must be positive<br>";
      return false;
    }
    return true;
  }

function handleClick() {
    alert('Box clicked!');
}

function handleMouseover() {
    const box = document.querySelector('.box');
    box.style.backgroundColor = 'lightgreen';
}

function handleMouseout() {
    const box = document.querySelector('.box');
    box.style.backgroundColor = 'lightblue';
}

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('click', handleClick);
    box.addEventListener('mouseover', handleMouseover);
    box.addEventListener('mouseout', handleMouseout);
    
});