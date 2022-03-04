const openBackProjectBtn = document.querySelector("#back-project");
const openBackProject = document.querySelector("#back-project-section");

// back this project button active
// const dotActiveA = document.querySelector("#dot-a");
// const dotActiveAOne = document.querySelector("#dot-1");
// dotActiveA.addEventListener("click", function () {
//   if (dotActiveAOne.classList.contains("hidden")) {
//     dotActiveAOne.classList.toggle("hidden");
//   }
// });
// console.log(dotActiveA);
const dotActive = document.querySelectorAll(".dot-1");
const dotActiveGreen = document.querySelectorAll(".dot");
const dotContainer = document.querySelectorAll(".dot-container");
const pledgeEnter = document.querySelectorAll(".pledge");
const continueBtn = document.querySelectorAll(".continue");
const successBox = document.querySelector(".success");
const successClose = document.querySelector(".success-close");
const closeBtn = document.querySelector(".close");
const closeMenu = document.querySelector(".close-menu");
const menuBtn = document.querySelector(".menu");
const mobileNavigation = document.querySelector(".mob-nav");

// mobile navigation
menuBtn.addEventListener("click", function () {
  menuBtn.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  mobileNavigation.classList.remove("hidden");
});
closeMenu.addEventListener("click", function () {
  menuBtn.classList.remove("hidden");
  closeMenu.classList.add("hidden");
  mobileNavigation.classList.add("hidden");
});
dotActive.forEach(function (dot, idx) {
  dot.addEventListener("click", function () {
    addHidden();
    removeBorder();
    addPledge();
    if (dotActiveGreen[idx].classList.contains("hidden")) {
      dotActiveGreen[idx].classList.remove("hidden");
      dotContainer[idx].classList.add("border-teal-600");
      pledgeEnter[idx].classList.remove("hidden");
    } else {
      addHidden();
      removeBorder();
      addPledge();
    }
  });
});
// after click continue btn
continueBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    successBox.classList.remove("hidden");
  });
});
// successBox close
successClose.addEventListener("click", function () {
  successBox.classList.add("hidden");
});
// adding hidden class on green circle
function addHidden() {
  dotActiveGreen.forEach(function (dot) {
    dot.classList.add("hidden");
  });
}
// remove green box border
function removeBorder() {
  dotContainer.forEach(function (border) {
    border.classList.remove("border-teal-600");
  });
}
// enter your pledge box hide
function addPledge() {
  pledgeEnter.forEach(function (enter) {
    enter.classList.add("hidden");
  });
}
// close pledge box with button
closeBtn.addEventListener("click", function () {
  openBackProject.classList.add("hidden");
});

openBackProjectBtn.addEventListener("click", function () {
  if (openBackProject.classList.contains("hidden")) {
    openBackProject.classList.remove("hidden");
  }
});
// window.addEventListener("click", function (e) {
//   const click = e.target.closest("#back-project-section");
//   //   const cartBtn = e.target.closest(".cart--show");
//   //   const subScript = e.target.closest(".cartContainer");
//   // || cartBtn
//   if (click) {
//     false;
//   } else {
//     openBackProject.classList.add("hidden");
//   }
// });
