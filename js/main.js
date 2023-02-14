fetch("https://litteratur-ba09.restdb.io/rest/books", {
  method: "get",
  headers: {
    "x-apikey": "63ea8a4e478852088da681d6",
  },
})
  .then((e) => e.json())
  .then(doSomething);

function doSomething(data) {
  console.log(data);
}
