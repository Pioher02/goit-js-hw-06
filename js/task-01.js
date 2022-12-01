const category = document.querySelectorAll('.item');
console.log("Number of categories: " + category.length);

for (let index = 0; index < category.length; index++) {
    const title = category[index].children[0].textContent;
    console.log("Category: "+ title);
    const element = category[index].children[1].childElementCount;
    console.log("Elements: "+ element);
   
}

