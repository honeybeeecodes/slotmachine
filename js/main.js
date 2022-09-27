// This function generates a number between 1 & 2 

function getRandomNumber(){
    return Math.floor(Math.random() * 2) + 1;
}

// This function will use DOM to return a HTML element by its ID

function getElement(id){
    return document.getElementById(id);
}


// This function call the methods necessary to generate random numbers and replaces the content of the corresponding html elements
// If all three numbers generated match then it will show a You Win message
function spin(){
    const item1 = getElement('item1');
    const item2 = getElement('item2');
    const item3 = getElement('item3');

    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const num3 = getRandomNumber();

    item1.innerHTML = `${num1}`;
    item2.innerHTML = `${num2}`;
    item3.innerHTML = `${num3}`;
}

// The two functions below will either show or hide the message depending on if the user wins or lose

function showMessage(){
    const msg = document.getElementById('message');
    msg.style.display = 'block';
    msg.classList.add('animated', 'pulse');
}

function hideMessage() {
    const msg = document.getElementById('message');
    msg.style.display = 'none';
}

