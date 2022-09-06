const itemLiElem = document.querySelectorAll('.item');
console.log(`Number of categories: `, itemLiElem.length);

itemLiElem.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
  });

