"use strict";

//Menu show
function showMenu(toggleId, navId) {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
}

showMenu("nav-toogle", "nav-menu");

//Remove menu
function removeMenu() {
  const navLink = document.querySelectorAll(".nav_link");
  const navMenu = document.getElementById("nav-menu");

  function linkAction() {
    navMenu.classList.remove("show");
  }
  navLink.forEach((n) => n.addEventListener("click", linkAction));
}
removeMenu();

//Scroll sections active link
function scrollActive() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active");
      document.querySelector(".nav_menu a[href*=" + sectionId + "]");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active");
      document.querySelector(".nav_menu a[href*=" + sectionId + "]");
    }
  });
}
window.addEventListener("scroll", scrollActive);

//Active menu by clicking
function activeMenuClick() {
  document.querySelector(".nav_list").addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("nav_link")) {
      const id = e.target.getAttribute("href");
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
      if (e.target.classList.contains("active")) {
        e.target.classList.remove("active");
      } else {
        e.target.classList.add("active");
      }

      const scrollY = window.pageYOffset;
      const sectionHeight = e.target.offsetHeight;
      const sectionTop = e.target.offsetTop - 50;
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        e.target.classList.add("active");
      } else {
        e.target.classList.remove("active");
      }
    }
  });
}
activeMenuClick();

// //Change header color
// function changeHeaderColor() {
//   const nav = document.getElementById("header");
//   window.onscroll = function (e) {
//     if (scrollY >= 200) {
//       nav.classList.add("scroll_header");
//     } else nav.classList.remove("scroll_header");
//   };
// }
// changeHeaderColor();

//Menu fade animation
function fadeAnimation() {
  const nav = document.querySelector(".nav");
  const handleHover = function (e) {
    if (e.target.classList.contains("nav_link")) {
      const link = e.target;
      const siblings = link.closest(".nav").querySelectorAll(".nav_link");
      const logo = link.closest(".nav").querySelector(".nav_logo");

      siblings.forEach((el) => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };
  //Passing 'argument' into handler
  nav.addEventListener("mouseover", handleHover.bind(0.5));
  nav.addEventListener("mouseout", handleHover.bind(1));
}
fadeAnimation();

//SlideShow
var slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active_dot", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active_dot";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

//Maps
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
