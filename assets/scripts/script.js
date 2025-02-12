window.onload = function () {
  var menubtn = document.getElementById("menu_btn");
  var nav = document.getElementById("nav");

  menubtn.onclick = function () {
    menubtn.classList.toggle("change");
    nav.classList.toggle("show_mobile_nav");
  };
  var navExtend = document.querySelectorAll(".nav_extend");

  navExtend.forEach(function (item) {
    item.addEventListener("mouseenter", function (event) {
      navExtend.forEach((el) => {
        if (el !== item) {
          el.classList.remove("dropit");
        }
      });

      item.classList.toggle("dropit");
    });
    item.addEventListener("mouseleave", function () {
      item.classList.remove("dropit");
    });
  });

  var edu_odo = document.querySelector(".odometer1");
  var health_odo = document.querySelector(".odometer2");
  var env_odo = document.querySelector(".odometer3");
  var emp_odo = document.querySelector(".odometer4");
  var comm_odo = document.querySelector(".odometer5");

  const odometer = new Odometer({ el: edu_odo });
  const odometer2 = new Odometer({ el: health_odo });
  const odometer3 = new Odometer({ el: env_odo });
  const odometer4 = new Odometer({ el: emp_odo });
  const odometer5 = new Odometer({ el: comm_odo });

  // Function to start counter animation
  function startCounter(counterEl, value) {
    if (counterEl.dataset.animated !== "true") {
      // Prevent re-triggering
      counterEl.dataset.animated = "true";
      counterEl.innerHTML = "0"; // Reset before animation
      counterEl.odometer.update(value); // Start counting animation
    }
  }

  // Intersection Observer to trigger counters when visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          switch (entry.target) {
            case edu_odo:
              startCounter(edu_odo, 3216);
              break;
            case health_odo:
              startCounter(health_odo, 147572);
              break;
            case env_odo:
              startCounter(env_odo, 1811);
              break;
            case emp_odo:
              startCounter(emp_odo, 167);
              break;
            case comm_odo:
              startCounter(comm_odo, 51407);
              break;
          }
        }
      });
    },
    { threshold: 0.5 }
  ); // Trigger when 50% visible

  // Observe each counter element
  observer.observe(edu_odo);
  observer.observe(health_odo);
  observer.observe(env_odo);
  observer.observe(emp_odo);
  observer.observe(comm_odo);
};

//   logo slider js
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);
//  section transition js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section-transition");

  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.1, // Trigger when 10% of the section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-section");
        observer.unobserve(entry.target); // Stop observing once shown
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section); // Observe each section
  });
});

// scroll to top js

let mybutton = document.getElementById("scrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scroll
  });
}

// smooth scroll to section for nav bar URLs

function navigateToSection(sectionId) {
  sessionStorage.setItem("scrollToSection", sectionId);
}
