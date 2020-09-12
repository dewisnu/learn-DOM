// DOM selectionn
//document.getElementById()-> Element


// const judul = document.getElementById('judul');

// judul.style.color = 'red';
// judul.style.backgroundColor = 'blue';
// judul.innerHTML = 'ariwisnu sanjaya';


// //document.getElementsByTagName();-> HTMLCollections

// const p = document.getElementsByTagName('p');


// for (let index = 0; index < p.length; index++) {
//     p[index].style.backgroundColor = 'lightblue';
    
// }


// const h1 = document.getElementsByTagName('h1')[0];

// h1.style.fontSize = '50px';


// //document.getElementsByClassName()->HTMLCollection

// const p1 = document.getElementsByClassName('p1');

// p1[0]
// .innerHTML = 'ini di ubah dari javascript';

// //document.querySelector()->Element

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize ='100px';


// const li4 = document.querySelector('section#b ul li:nth-child(2)');
// li4.style.backgroundColor ='orange';

// const p5 = document.querySelector('p');

// p5.style.color = 'red';

// //document.querySelectorAll()->nodelist

// const p10 = document.querySelectorAll('p');

// for (let index = 0; index < p10.length; index++){
//    p10[index].style.fontSize = '10px';
    
// }



const sectionb = document.getElementById('b');
const p4 = sectionb.querySelector('p');

p4.style.color ='red';
