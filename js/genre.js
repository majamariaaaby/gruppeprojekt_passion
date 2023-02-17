fetch("https://litteratur-ba09.restdb.io/rest/books/")
  .then((res) => res.json())
  .then(showGenres);

function showGenres(gens) {
  gens.forEach(showGenre);
}

function showCategory(gen) {
  //fanger vores template
  const template = document.querySelector("template").content;
  //cloner
  const clone = template.cloneNode(true);
  //ændrer indhold
  clone.querySelector("a").textContent = gen.genre;
  clone.querySelector("a").href = `productlist.html?genre=${gen.genre}`;
  //appender
  document.querySelector(".grid_1-1 ol").appendChild(clone);
}
