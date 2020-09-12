//DOM manipulation
//buat element baru

const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');

//simpan tulisan ke paragraf

pBaru.appendChild(teksPBaru);

//simpan baru di akhir section a

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);





const liBaru = document.createElement('li');
const teksLiBaru =  document.createTextNode('li baru');

liBaru.appendChild(teksLiBaru);


const ul = document.querySelector('section#b ul');

const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li2)


const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');

const p4 = sectionB.querySelector('p');
const h2 = document.createElement('h2');
const teksh2 = document.createTextNode('h2 baru');

h2.appendChild(teksh2);

sectionB.replaceChild(h2,p4);


pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor ='lightgreen';
h2.style.backgroundColor = 'lightgreen';

