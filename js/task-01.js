const itemLiElem = document.querySelectorAll('.item');
console.log(`Number of categories: `, itemLiElem.length);
console.log(` `);
const hElem = document.querySelectorAll('.item h2');
console.log(`Category: `, hElem[0].textContent);

const ulElem= document.querySelectorAll('.item ul');
const ul0 = ulElem[0];
const li0 = ul0.querySelectorAll('.item ul li');
console.log(`Elements: `, li0.length);
console.log(` `);

console.log(`Category: `, hElem[1].textContent);
const ul1 = ulElem[1];
const li1 = ul1.querySelectorAll('.item ul li');
console.log(`Elements: `, li1.length);
console.log(` `);
console.log(`Category: `, hElem[2].textContent);
const ul2 = ulElem[2];
const li2 = ul2.querySelectorAll('.item ul li');
console.log(`Elements: `, li2.length);

