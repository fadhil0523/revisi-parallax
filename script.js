let breadOne = document.getElementById("breadOne");
let vegetable = document.getElementById("vegetable");
let meat = document.getElementById("meat");
let breadTwo = document.getElementById("breadTwo");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);
  if (value <= 590) {
    breadOne.style.top = value * 0.9 + "px";
    breadOne.style.right = value * 0.3 + "px";
    vegetable.style.top = value * 1 + "px";
    vegetable.style.right = value * 0.3 + "px";
    meat.style.top = value * 1.1 + "px";
    meat.style.right = value * 0.3 + "px";
    breadTwo.style.top = value * 1.2 + "px";
    breadTwo.style.right = value * 0.3 + "px";
  }
});
