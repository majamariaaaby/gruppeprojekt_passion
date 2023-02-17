fetch("https://litteratur-ba09.restdb.io/rest/books", {
  method: "get",
  headers: {
    "x-apikey": "63ea8a4e478852088da681d6",
  },
})
  .then((e) => e.json())
  .then(doSomething);

function doSomething(books) {
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;

  books.forEach((book) => {
    // console.log("book");

    //lav en kopi
    const copy = template.cloneNode(true);
    //ændre indhold

    copy.querySelector("h2").textContent = book.title;
    copy.querySelector("#author").textContent = book.author;
    copy.querySelector("#price").textContent = book.price + ".- kr";
    copy.querySelector("img").src = book.image;
    // copy.querySelector("a").href = `product.html?id=${book.id}`;
    document.querySelector(".grid_1-1-1").appendChild(copy);
  });
}
