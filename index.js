let images = document.querySelectorAll(".image");
var index = 0;
setInterval(() => {
  images[index].classList.remove("active");
  index = (index + 1) % images.length;
  images[index].classList.add("active");
}, 2000);
let contactBtn = document.getElementsByClassName("contactBtn");
contactBtn[0].addEventListener("click", () => {
  window.location.href = "mailto:hussainnaqvee@gmail.com";
});
const navigateToDiv = (element) => {
  console.log("Im clicked");

  document
    .getElementsByClassName(element)[0]
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
};
let homeNav = document.getElementsByClassName("homeNav");
let aboutNav = document.getElementsByClassName("aboutNav");
let contactNav = document.getElementsByClassName("contactNav");
homeNav[0].addEventListener("click", navigateToDiv("banner"));
contactNav[0].addEventListener("click", navigateToDiv(contactNav[0]));
aboutNav[0].addEventListener("click", navigateToDiv(aboutNav[0]));
