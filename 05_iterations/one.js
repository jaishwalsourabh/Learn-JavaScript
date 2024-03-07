// All DOM Node Lists and Selectors

/*
document.getElementById('title')

document.getElementById('title').id

document.getElementById('title').class

document.getElementById('title').className

document.getElementById('title').getAttribute

document.getElementById('title').getAttribute('id')

document.getElementById('title').getAttribute('class')

document.getElementById('title').setAttribute('class', 'test heading')
*/

const title = document.getElementById('title')

title.style.backgroundColor = 'green'

title.style.padding = '15px'

title.style.borderRadius = '10px'




const myH2 = document.querySelectorAll('.mw-headline')

myH2.forEach((h) => {
    h.style.color = 'black';
    h.style.backgroundColor = 'green';
    h.style.padding = '10px';
    h.innerText = 'Hitesh';
})
