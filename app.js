'use static'

// wish constructor


function Wish() {
    this.name = name;
    this.date = date;
}

// get form for js manipulation

var form = document.getElementById('form');


// store form data in the storage
function setData(){
    var data= document.getElementById('wishName').value;
    localStorage.setItem('wishName',data)
}

setData();
// get form data from the storage
function getData(){
    var data= document.getElementById('wishName').value;
    localStorage.setItem('wishName',data)
}



// get table

var table = document.getElementById('table')






// calculate random year
function randomYear() {
    return Math.floor(Math.random() * (99 - 1)) + 1;
}