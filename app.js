'use static'

// wish constructor
Wish.all = [];

function Wish(name, date) {
    this.name = name;
    this.date = date;
    this.random = randomYear();

    Wish.all.push(this);
}



// get form for js manipulation
var form = document.getElementById('form');

form.addEventListener("submit", handler);

function handler(event) {

    event.preventDefault();

    var data = document.getElementById('wishName').value;
    var date = document.getElementById('date').value;

    var newWish = new Wish(data, date);

    setData();
    render();

}



// get table to show render data

var tbody = document.getElementById('tbody');


function render() {

    tbody.innerHTML = "";

    for (let i = 0; i < Wish.all.length; i++) {

        var tdEl = document.createElement('tr');
        tbody.appendChild(tdEl);

        var td1 = document.createElement('td');
        tbody.appendChild(td1);
        var td2 = document.createElement('td');
        tbody.appendChild(td2);
        var td3 = document.createElement('td');
        tbody.appendChild(td3);

        td1.textContent = `${Wish.all[i].name}`
        td2.textContent = `${Wish.all[i].date}`
        td3.textContent = `${Wish.all[i].random}`

    }

}

// calculate random year
function randomYear() {
    return Math.floor(Math.random() * (99 - 1)) + 1;
}

// store form data in the storage
function setData() {
    localStorage.setItem('wishName', JSON.stringify(Wish.all));
}


// get form data from the storage
function getData() {

    var retriveData = localStorage.getItem('wishName');


    if (retriveData) {
        Wish.all = JSON.parse(retriveData);
        render();

    }
}

getData();