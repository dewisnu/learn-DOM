// const p3 = document.querySelector('.p3');
// function ubahWarnap2() {
//     p2.style.backgroundColor = 'lightblue';
// }
// function ubahWarnap3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnap2;


// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click',function() {
  
//     const ul = document.querySelector('section#b ul');
//     const li = document.createElement('li')
//     const text = document.createTextNode('item baru');

//     li.appendChild(text);

//     ul.appendChild(li);

// });


const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function() {
//     p3.style.color = 'red';
// }




p3.addEventListener('mouseenter', function() {
    p3.style.backgroundColor = 'lightblue';
})
p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'white';
})
// p3.addEventListener('click', function () {
//     p3.style.color = 'red';
// })