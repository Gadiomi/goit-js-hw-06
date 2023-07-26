const categoriesArray = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesArray.length} `);

categoriesArray.forEach((category) => {
  const titleElem = document.querySelector("li > h2");
  const categoriName = titleElem.textContent;
  console.log(`Category: ${categoriName}`);

  const categorySum = category.querySelectorAll("li").length;
  console.log(`Elements: ${categorySum}`);
});
