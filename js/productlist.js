const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

if (category) {
  fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
    .then((res) => res.json())
    .then(showProducts);
} else {
  fetch("https://kea-alt-del.dk/t7/api/products")
    .then((res) => res.json())
    .then(showProducts);
}

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  //fang template
  const template = document.querySelector("#smallProductTemplate").content;
  //lav en kopi
  const copy = template.cloneNode(true);
  //ændre indhold

  copy.querySelector("h2").textContent = product.brandname;
  copy.querySelector("#productname").textContent = product.productdisplayname;
  copy.querySelector("#article").textContent = product.articletype;
  copy.querySelector("#price").textContent = product.price + ".- kr";
  copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector("a").href = `product.html?id=${product.id}`;
  document.querySelector(".grid_1-1-1").appendChild(copy);
}

//   if (product.discount) {
//     var originalPrice = product.price;
//     var discountPercentage = product.discount;
//     var newprice = originalPrice * (discountPercentage / 100);
//     copy.querySelector("#newprice").textContent = newprice + " kr" + " " + discountPercentage + "% off";
//     copy.querySelector("#price").remove("");
//   }

//   if (product.soldout) {
//     copy.querySelector("section").classList.add("soldOut");
//   }

/* <div class="col_tshirt">
<img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
<h2 id="productname">Team India Fanwear Round Neck Jersey</h2>
<h2><span class="brand">Nike</span> | <span class="article">T-shirts</span></h2>              <p class="price">DKK 1595,-</p>
<p class="read_more">
<a href="product.html">Read More</a>
</p> */

/*	
id	1165
gender	"Men"
category	"Apparel"
subcategory	"Topwear"
articletype	"Tshirts"
basecolour	"Blue"
season	"Summer"
productionyear	2013
usagetype	"Sports"
productdisplayname	"Mean Team India Cricket Jersey"
parsed	1
soldout	0
relid	1165
price	2495
discount	45
variantname	"Authentic Jersey"
brandname	"Nike"
brandbio	"Nike, creating experiences for today’s athlete"
brandimage	"http://assets.myntassets.com/v1/assets/banners/2015/6/26/1435317851398-23197-3chxv6.jpg"
agegroup	"Adults-Men"
colour1	"NA"
colour2	"NA"
fashiontype	"Fashion"
materialcaredesc	"<p>Polyester<br />Machine wash</p>"
sizefitdesc	null
description	"<p>Blue jersey with a tipped collar, concealed, half buttoned placket, Nike print on the right chest, Team India print and applique on the front, short sleeves, tri-colour side panels, print at the back</p>"
styledesc	"<p>Root for our country in style with this team India jersey from Nike. The Dri-fit fabric and panel"
 */
