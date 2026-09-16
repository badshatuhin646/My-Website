```javascript
/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");

const navbar = document.getElementById("navbar");


if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", function () {

        navMenu.classList.toggle("show");


        const icon =
            menuBtn.querySelector("i");


        if (navMenu.classList.contains("show")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    /* Close menu after navigation */

    const navLinks =
        navMenu.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");


            const icon =
                menuBtn.querySelector("i");


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}


/* =====================================================
   CLOSE MOBILE MENU OUTSIDE
===================================================== */

document.addEventListener("click", function (event) {

    if (
        navbar &&
        navMenu &&
        menuBtn &&
        !navbar.contains(event.target)
    ) {

        navMenu.classList.remove("show");


        const icon =
            menuBtn.querySelector("i");


        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});



/* =====================================================
   WORK FILTER
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const workCards =
    document.querySelectorAll(".work-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {


        /* Remove active class */

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        /* Add active class */

        button.classList.add("active");


        const filter =
            button.getAttribute("data-filter");


        workCards.forEach(function (card) {


            if (
                filter === "all" ||
                card.classList.contains(filter)
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});



/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            alert(
                "Thank you! Your message form has been submitted."
            );


            contactForm.reset();

        }
    );

}



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll(".nav-2 a");


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    links.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});



