const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor='black';

const p = document.getElementsByTagName('p');
for( let i = 0; i < p.length; i++ ){
    p[i].style.backgroundColor = 'green';
}

const p4 = document.querySelector('#b p');
p4.style.color = 'blue'

const li2 = document.querySelector('#b ul li:nth-child(2)');
li2.style.backgroundColor = 'blue'

const li1 = document.querySelector('#b ul li:nth-child(1)');
li1.style.color = 'blue'

const li3 = document.querySelector('#b ul li:nth-child(3)');
li3.style.color = 'blue'

