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

    const odometer = new Odometer({
        el: edu_odo,
    })
    const odometer2 = new Odometer({
        el: health_odo,
    })
    const odometer3 = new Odometer({
        el: env_odo,
    })
    const odometer4 = new Odometer({
        el: emp_odo,
    })
    const odometer5 = new Odometer({
        el: comm_odo,
    })
    edu_odo.innerHTML = 2800;
    health_odo.innerHTML = 25800;
    env_odo.innerHTML = 1800;
    emp_odo.innerHTML = 140;
    comm_odo.innerHTML = 41000;
};