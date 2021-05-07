let categoriesArray = [];

let elementsArray = Array.from(document.querySelectorAll('.show-sub-menu.hidden-xs.hidden-sm'));

elementsArray.forEach(item => categoriesArray.push(item.innerText.trim()));

console.log(elementsArray.toString());