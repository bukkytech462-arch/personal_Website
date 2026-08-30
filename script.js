
/* =====================================================
   BUKKY TECH PORTFOLIO
   JAVASCRIPT
===================================================== */


/* =====================================================
   LOADING SCREEN
===================================================== */

window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1200);

});


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");


menuToggle.addEventListener("click", () => {

    const isOpen =
        navMenu.classList.toggle("open");

    menuToggle.classList.toggle(
        "active",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    document.body.classList.toggle(
        "menu-open",
        isOpen
    );

});


/* Close mobile menu after clicking */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        document.body.classList.remove(
            "menu-open"
        );

    });

});


/* =====================================================
   NAVBAR SCROLL EFFECT
===================================================== */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =====================================================
   SCROLL PROGRESS
===================================================== */

const scrollProgress =
    document.getElementById(
        "scrollProgress"
    );


window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight
        - window.innerHeight;

    const progress =
        (scrollTop / documentHeight) * 100;

    scrollProgress.style.width =
        `${progress}%`;

});


/* =====================================================
   TYPING ANIMATION
===================================================== */

const typingText =
    document.getElementById(
        "typingText"
    );


const words = [

    "Cybersecurity Student",

    "Python Learner",

    "Future Security Analyst",

    "Content Creator",

    "Cybersecurity Advocate",

    "Lifelong Learner"

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1500
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % words.length;

        }

    }


    const speed =
        deleting ? 45 : 90;


    setTimeout(
        typeEffect,
        speed
    );

}


typeEffect();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


function updateActiveNav() {

    let currentSection = "";

    const scrollPosition =
        window.scrollY + 200;


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );


        const href =
            link.getAttribute("href");


        if (
            href === `#${currentSection}`
        ) {

            link.classList.add(
                "active"
            );

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById(
        "backToTop"
    );


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add(
            "show"
        );

    } else {

        backToTop.classList.remove(
            "show"
        );

    }

});


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =====================================================
   THEME TOGGLE
===================================================== */

const themeToggle =
    document.getElementById(
        "themeToggle"
    );


const savedTheme =
    localStorage.getItem(
        "bukky-theme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light-theme"
    );

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-theme"
        );


        const isLight =
            document.body.classList.contains(
                "light-theme"
            );


        localStorage.setItem(
            "bukky-theme",
            isLight ? "light" : "dark"
        );


        themeToggle.innerHTML =
            isLight
                ? '<i class="fa-solid fa-sun"></i>'
                : '<i class="fa-solid fa-moon"></i>';

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById(
                "name"
            ).value.trim();


        const email =
            document.getElementById(
                "email"
            ).value.trim();


        const message =
            document.getElementById(
                "message"
            ).value.trim();


        if (
            !name ||
            !email ||
            !message
        ) {

            alert(
                "Please fill in all fields."
            );

            return;

        }


        const subject =
            encodeURIComponent(
                `Portfolio Message from ${name}`
            );


        const body =
            encodeURIComponent(
                `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n${message}`
            );


        window.location.href =
            `mailto:afolayandorcas46@gmail.com?subject=${subject}&body=${body}`;

    }
);


/* =====================================================
   ESCAPE KEY CLOSES MOBILE MENU
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            navMenu.classList.contains("open")
        ) {

            navMenu.classList.remove(
                "open"
            );

            menuToggle.classList.remove(
                "active"
            );

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();


/* =====================================================
   IMAGE ERROR HANDLING
===================================================== */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";

                image.parentElement.classList.add(
                    "image-missing"
                );

            }
        );

    });


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%cBukky Tech Portfolio",
    "color:#c1121f;font-size:20px;font-weight:bold;"
);

console.log(
    "%cCybersecurity journey loading...",
    "color:#888;font-size:12px;"
);