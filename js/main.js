const $menuToggleBtn = document.querySelector("header nav .menu-toggle");
const $menuLinks = document.querySelector("header nav ul");
const $bullets = document.querySelectorAll(".bullets li");
const $landing = document.querySelector(".landing");
const $rightArrow = document.querySelector("i.right");
const $leftArrow = document.querySelector("i.left");

// clicking the menu btn
$menuToggleBtn.addEventListener("click", () => {
  $menuLinks.classList.toggle("show-menu");
});

// clicking on each bullet
$bullets.forEach((li) => {
  li.addEventListener("click", () => {
    // change the background

    // remove the active class  if exists and add to the next item else add to that bullet
    if (!li.classList.contains("active")) {
      // does not contain active class change the bullets class active
      document.querySelector(`#b${1}`).classList.remove("active");
      document.querySelector(`#b${2}`).classList.remove("active");
      document.querySelector(`#b${3}`).classList.remove("active");
      li.classList.add("active");

      // change background
      changeBg(1);
    }
  });
});

// click the right arrow
$rightArrow.addEventListener("click", () => {
  // change background
  changeBg(1);

  let activeLi = document.querySelector("li.active");
  let next = activeLi.nextElementSibling;
  if (!next) {
    document.querySelector("#b1").classList.add("active");
  } else {
    next.classList.add("active");
  }

  activeLi.classList.remove("active");
});

$leftArrow.addEventListener("click", () => {
  // change background
  changeBg(-1);

  let activeLi = document.querySelector("li.active");
  let prev = activeLi.previousElementSibling;
  if (!prev) {
    document.querySelector("#b3").classList.add("active");
  } else {
    prev.classList.add("active");
  }

  activeLi.classList.remove("active");
});

// change background function
const changeBg = (order) => {
  let currentBg = getComputedStyle($landing).backgroundImage;

  if (order === 1) {
    if (currentBg.includes("bg1")) {
      currentBg = currentBg.replace("bg1", "bg2");
    } else if (currentBg.includes("bg2")) {
      currentBg = currentBg.replace("bg2", "bg3");
    } else {
      currentBg = currentBg.replace("bg3", "bg1");
    }
  } else {
    if (currentBg.includes("bg1")) {
      currentBg = currentBg.replace("bg1", "bg3");
    } else if (currentBg.includes("bg2")) {
      currentBg = currentBg.replace("bg2", "bg1");
    } else {
      currentBg = currentBg.replace("bg3", "bg2");
    }
  }

  $landing.style.backgroundImage = currentBg;
};