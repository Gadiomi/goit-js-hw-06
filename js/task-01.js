const categoriesArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArray.lenght} `);

categoriesArray.forEach((category) => {
  const titleElem = document.querySelector("li > h2");
  const categoriName = titleElem.textContent;
  console.log(`Category: ${categoriName}`);

  const categorySum = category.querySelectorAll("li").lenght;
  console.log(`Elements: ${categorySum}`);
});
