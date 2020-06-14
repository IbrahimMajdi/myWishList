'use static'

// wish constructor
Wish.all = [];

console.log("all");

function Wish(name, date) {
    this.name = name;
    this.date = date;
    Wish.all.push(this);
}


// get form for js manipulation
var form = document.getElementById('form');

form.addEventListener("submit", handler);

function handler(event) {
    event.preventDefault();
    


}



// store form data in the storage
function setData() {
    var data = document.getElementById('wishName').value;
    var date = document.getElementById('date').value;

    localStorage.setItem('wishName', JSON.stringify(data))
    localStorage.setItem('date', JSON.stringify(date))


}
setData();






// get form data from the storage
function getData() {

    var retriveData = localStorage.getItem(JSON.parse('wishName'));
    var retriveDate = localStorage.getItem(JSON.parse('date'))


    if (Wish.all) {

    }
}

// getData();




// get table to show render data

var tbody = document.getElementById('tbody');

var tdEl = document.createElement('td');
// tbody.appendChild(tdEl);

// tdEl.textContent = 




// calculate random year
function randomYear() {
    return Math.floor(Math.random() * (99 - 1)) + 1;
}