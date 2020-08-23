// DOM selectionn
//document.getElementById()-> Element


const judul = document.getElementById('judul');

judul.style.color = 'red';
judul.style.backgroundColor = 'blue';
judul.innerHTML = 'ariwisnu sanjaya';


//document.getElementsByTagName();-> HTMLCollections

const p = document.getElementsByTagName('p');


for (let index = 0; index < p.length; index++) {
    p[index].style.backgroundColor = 'lightblue';
    
}


const h1 = document.getElementsByTagName('h1')[0];

h1.style.fontSize = '50px';


//document.getElementsByClassName()->HTMLCollection

const p1 = document.getElementsByClassName('p1');

p1[0]
.innerHTML = 'ini di ubah dari javascript';

