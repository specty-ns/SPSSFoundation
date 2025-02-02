window.onload = function () {
    var menubtn = document.getElementById("menu_btn");
    var nav = document.getElementById("nav");

    menubtn.onclick = function(){
        menubtn.classList.toggle("change");
        nav.classList.toggle("show")
    }
    var navExtend = document.querySelectorAll(".nav_extend");

    navExtend.forEach(function (item) {
        item.addEventListener("click", function (event) {
            event.preventDefault();

            navExtend.forEach((el) => {
                if (el !== item) {
                    el.classList.remove("dropit");
                }
            });

            item.classList.toggle("dropit");
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
    if (counterEl.dataset.animated !== "true") { // Prevent re-triggering
        counterEl.dataset.animated = "true"; 
        counterEl.innerHTML = "0"; // Reset before animation
        counterEl.odometer.update(value); // Start counting animation
    }
}

// Intersection Observer to trigger counters when visible
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            switch (entry.target) {
                case edu_odo:
                    startCounter(edu_odo, 2800);
                    break;
                case health_odo:
                    startCounter(health_odo, 25800);
                    break;
                case env_odo:
                    startCounter(env_odo, 1800);
                    break;
                case emp_odo:
                    startCounter(emp_odo, 140);
                    break;
                case comm_odo:
                    startCounter(comm_odo, 41000);
                    break;
            }
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% visible

// Observe each counter element
observer.observe(edu_odo);
observer.observe(health_odo);
observer.observe(env_odo);
observer.observe(emp_odo);
observer.observe(comm_odo);
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);

};