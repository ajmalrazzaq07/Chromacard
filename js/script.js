const home = document.getElementById("home");
const onboarding = document.getElementById("onboarding");
function launch() {
  home.style.display = "none";
  onboarding.style.display = "";
}
function backhome() {
  home.style.display = "";
  onboarding.style.display = "none";
}
