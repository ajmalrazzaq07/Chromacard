const Productcard = document.getElementById("product_card");
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

function launch() {
  sections.home.style.display = "none";
  sections.onboarding.style.display = "";
  sections.onboarding.classList.add("loading_fade");
}
function backhome() {
  sections.home.style.display = "";
  sections.onboarding.style.display = "none";
}

function generate() {
  const cardradius = Math.trunc(Math.random() * 70);
  const imgbgradius = Math.trunc(Math.random() * 100);
  const btnradius = Math.trunc(Math.random() * 100);
  const checkdirectionbtns = Math.trunc(Math.random() * 4);
  Productcard.style.borderRadius = cardradius + "px";
  cardimage.bg.style.borderRadius = imgbgradius + "px";
  cardbtns.primary.style.borderRadius = btnradius + "px";

  if (checkdirectionbtns == 0) {
    cardsections.btns.style.flexDirection = "column-reverse";
  } else if (checkdirectionbtns == 1) {
    cardsections.btns.style.flexDirection = "row";
  } else if (checkdirectionbtns == 2) {
    cardsections.btns.style.flexDirection = "row-reverse";
  } else {
    cardsections.btns.style.flexDirection = "column";
  }
}
