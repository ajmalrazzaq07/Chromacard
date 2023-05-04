const sections = {
  home: document.getElementById("home"),
  onboarding: document.getElementById("onboarding"),
};
const cardsections = {
  image: document.getElementById("product_image"),
  info: document.getElementById("product_info"),
  btns: document.getElementById("product_btns"),
};
const cardtext = {
  name: document.getElementById("product_name"),
  description: document.getElementById("product_description"),
  price: document.getElementById("product_price"),
};
const cardimage = {
  bg: document.getElementById("img_bg"),
  img: document.getElementById("productimg"),
};
const cardbtns = {
  primary: document.getElementById("primarybtn"),
  secondary: document.getElementById("secondarybtn"),
};
const inputs = {
  productnameinput: document.getElementById("productnameinput"),
  productdescriptioninput: document.getElementById("productdescriptioninput"),
  productpriceinput: document.getElementById("productpriceinput"),
};
function launch() {
  sections.home.style.display = "none";
  sections.onboarding.style.display = "";
}
function backhome() {
  sections.home.style.display = "";
  sections.onboarding.style.display = "none";
}
function applyproductname() {
  if (inputs.productnameinput.value) {
    cardtext.name.textContent = inputs.productnameinput.value;
  } else {
    cardtext.name.textContent = "Name";
  }
}
function applyproductdescription() {
  if (inputs.productdescriptioninput.value) {
    cardtext.description.textContent = inputs.productdescriptioninput.value;
  } else {
    cardtext.description.textContent = "Description";
  }
}
function applyproductprice() {
  if (inputs.productpriceinput.value) {
    cardtext.price.textContent = inputs.productpriceinput.value;
  } else {
    cardtext.price.textContent = "$44";
  }
}
var loadFile = function (event) {
  var image = cardimage.img;
  image.src = URL.createObjectURL(event.target.files[0]);
};
