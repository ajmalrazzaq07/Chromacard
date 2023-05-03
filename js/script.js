const home = document.getElementById("home");
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
  img: Document.getElementById("productimg"),
};
const cardbtns = {
  primary: document.getElementById("primarybtn"),
  secondary: document.getElementById("secondarybtn"),
};

function launch() {
  sections.home.style.display = "none";
  sections.onboarding.style.display = "";
}
function backhome() {
  sections.home.style.display = "";
  sections.onboarding.style.display = "none";
}
function applyname() {}
