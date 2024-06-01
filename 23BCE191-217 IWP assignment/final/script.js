function openNav() {
  document.getElementById("topNav").style.height = "120px";
}

function closeNav() {
  document.getElementById("topNav").style.height = "0%";
}


const searchBar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}
addEventOnElem(searchTogglers, "click", toggleSearchBar);

function changeCSS(cssFile, cssLinkIndex) {

  var oldlink = document.getElementsById("css").item(cssLinkIndex);

  var newlink = document.createElement("link");
  newlink.setAttribute("rel", "stylesheet");
  newlink.setAttribute("type", "text/css");
  newlink.setAttribute("href", cssFile);

  document.getElementsById("css").item(cssLinkIndex).replaceChild(newlink, oldlink);
}

function changeTheme(cssFile) {
  document.getElementById("css").setAttribute("href", cssFile);
}