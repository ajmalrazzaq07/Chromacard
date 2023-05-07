const Productcard = document.getElementById("product_card");
const loadingMessage = document.getElementById("loading-message");
const errorMessage = document.getElementById("error-message");
const copybtn = document.getElementById("copybtn");
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
if (sections.home.style.display == "") {
  document.getElementById("backbtn").style.display = "none";
}

function launch() {
  sections.home.style.display = "none";
  sections.onboarding.style.display = "";
  sections.onboarding.classList.add("loading_fade");
  document.getElementById("backbtn").style.display = "";
}
function backhome() {
  document.getElementById("backbtn").style.display = "none";
  sections.home.style.display = "";
  sections.onboarding.style.display = "none";
}
let btnflexdirection;
let colorchecktext;
let cardradius;
let imgbgradius;
let btnradius;
let checkdirectionbtns;
let color1;
let color2;
let color3;
let btncheckcolor;
function generate() {
  const json_data = {
    mode: "diffusion",
    num_colors: 4,
    temperature: "1.5",
    num_results: 5,
    adjacency: [
      "0",
      "65",
      "45",
      "35",
      "65",
      "0",
      "35",
      "65",
      "45",
      "35",
      "0",
      "35",
      "35",
      "65",
      "35",
      "0",
    ],
    palette: ["-", "-", "-", "-"],
  };

  const options = {
    method: "POST",
    body: JSON.stringify(json_data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  errorMessage.style.display = "none";
  loadingMessage.style.display = "";

  fetch("https://api.huemint.com/color", options)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      loadingMessage.style.display = "none";
      console.log(data.results);
      copybtn.style.display = "";
      let [array1] = [...data.results];

      let palette = array1.palette;
      let [colorprimary, colorsecondary] = [...palette];
      function isColorBright(hexColor) {
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);

        const brightness = (299 * r + 587 * g + 114 * b) / 1000;

        return brightness >= 128;
      }
      if (isColorBright(colorprimary)) {
        colorchecktext = "black";
        cardtext.description.style.color = colorchecktext;
        cardbtns.secondary.style.color = colorchecktext;
        cardtext.price.style.color = colorchecktext;
      } else {
        colorchecktext = "White";
        cardtext.description.style.color = colorchecktext;
        cardbtns.secondary.style.color = colorchecktext;
        cardtext.price.style.color = colorchecktext;
      }

      if (isColorBright(colorsecondary)) {
        btncheckcolor = "black";
        cardbtns.primary.style.color = btncheckcolor;
      } else {
        btncheckcolor = "white";
        cardbtns.primary.style.color = btncheckcolor;
      }
      Productcard.style.backgroundColor = colorprimary;
      cardimage.bg.style.backgroundColor = colorsecondary;
      cardbtns.primary.style.backgroundColor = colorsecondary;
      cardtext.name.style.color = colorsecondary;
      color1 = colorprimary;
      color2 = colorsecondary;
      cardradius = Math.trunc(Math.random() * 70);
      imgbgradius = Math.trunc(Math.random() * 100);
      btnradius = Math.trunc(Math.random() * 100);
      checkdirectionbtns = Math.trunc(Math.random() * 4);
      Productcard.style.borderRadius = cardradius + "px";
      cardimage.bg.style.borderRadius = imgbgradius + "px";
      cardbtns.primary.style.borderRadius = btnradius + "px";

      if (checkdirectionbtns == 0) {
        btnflexdirection = "column-reverse";
        cardsections.btns.style.flexDirection = btnflexdirection;
      } else if (checkdirectionbtns == 1) {
        btnflexdirection = "row";
        cardsections.btns.style.flexDirection = btnflexdirection;
      } else if (checkdirectionbtns == 2) {
        btnflexdirection = "row-reverse";
        cardsections.btns.style.flexDirection = btnflexdirection;
      } else {
        btnflexdirection = "column";
        cardsections.btns.style.flexDirection = btnflexdirection;
      }
    })
    .catch((error) => {
      loadingMessage.style.display = "none";
      errorMessage.style.display = "";
      setTimeout(() => {
        errorMessage.style.display = "none";
      }, 2000);
    });
}
function copycode() {
  const copyMessage = document.getElementById("copy-message");
  const html = `    <div id="product_card">
                <div id="product_image">
                  <div id="img_bg">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/26438/shoe.png"
                      alt=""
                      id="productimg"
                    />
                  </div>
                </div>
                <div id="product_info">
                  <h4 id="product_name">Product Name</h4>
                  <p id="product_description">Description</p>
                  <p id="product_price">$44</p>
                </div>
                <div id="product_btns">
                  <button id="primarybtn">Buy Now</button>
                  <button id="secondarybtn">Details</button>
                </div>
              </div>`;
  const css = `
#product_card {
  background-color: ${color1};
  border-radius: ${cardradius + "px"};
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}
#img_bg {
  width: 140px;
  height: 140px;
  border-radius: ${imgbgradius + "px"};
  background-color: ${color2};
}
#productimg {
  width: 12em;
  transform: rotate(-30deg);
  position: relative;
  top: 20px;
  left: -32px;
}
#product_info {
  margin: 0;
  text-align: center;
}
#product_name {
  font-size: 30px;
  color: ${color2};
  font-weight: 500;
}
#product_description {
  font-size: 16px;
  color: ${colorchecktext};
}

#product_price {
  color: ${colorchecktext};
}
#product_btns {
  display: flex;
  flex-direction: ${btnflexdirection};
  justify-content: space-around;
  gap: 10px;
  align-items: center;
}
#primarybtn {
  width: 80px;
  height: 30px;
  outline: none;
  border: none;
  background-color: ${color2};
  color: ${btncheckcolor};
  border-radius: ${btnradius + "px"}
}
#secondarybtn {
  background: none;
  outline: none;
  border: none;
  color: ${colorchecktext};
}
`;
  const code = html + "\n\n<style>\n" + css + "\n</style>";

  // Create a temporary textarea element to hold the code
  const textarea = document.createElement("textarea");
  textarea.value = code;
  document.body.appendChild(textarea);

  // Copy the code to the clipboard
  textarea.select();
  document.execCommand("copy");

  // Remove the temporary textarea element
  document.body.removeChild(textarea);
  copyMessage.style.display = "";
  setTimeout(() => {
    copyMessage.style.display = "none";
  }, 2000);
}
