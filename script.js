let footer = document.getElementById("footer");
let active = document.getElementById("active");
let icon = document.getElementById("icon");
let width = window.innerWidth;

function resize() {
  width = window.innerWidth;
}

// function reset() {
//   if (width <= 800) {
//     active.classList.add("off");
//   } else {
//   }
// }

window.onresize = resize;

function clicky() {
  if (width >= 800) {
    active.classList.toggle("off");
  } else {
    footer.classList.toggle("off");
    active.classList.toggle("off");
  }
}
