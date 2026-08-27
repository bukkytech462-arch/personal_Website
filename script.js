
/* =================================
   PORTFOLIO JAVASCRIPT
================================= */


/* =================================
   1. LOADING SCREEN
================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }, 2500);

});


/* =================================
   2. TYPING ANIMATION
================================= */

const typingText = document.getElementById("typing-text");

const words = [
    "Cybersecurity Student",
    "Python Learner",
    "Future Security Analyst",
    "Cybersecurity Content Creator",
    "Cybersecurity Advocate",
    "Lifelong Learner"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingText) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 45 : 90
    );
}


if (typingText) {
    typeEffect();
}


/* =================================
   3. SCROLL PROGRESS BAR
================================= */

const progressBar =
    document.getElementById("progress-bar");


function updateProgressBar() {

    if (!progressBar) return;

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (documentHeight <= 0) return;

    const scrollPercentage =
        (scrollTop / documentHeight) * 100;

    progressBar.style.width =
        `${scrollPercentage}%`;
}


window.addEventListener(
    "scroll",
    updateProgressBar,
    { passive: true }
);

updateProgressBar();


/* =================================
   4. MOBILE MENU
================================= */

const menuButton =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", (event) => {

        event.stopPropagation();

        navLinks.classList.toggle("active");

    });


    /* =================================
       5. CLOSE MENU WHEN LINK IS CLICKED
    ================================= */

    document.querySelectorAll(".nav-links a")
        .forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

            });

        });


    /* =================================
       6. CLOSE MENU OUTSIDE
    ================================= */

    document.addEventListener("click", (event) => {

        if (
            navLinks.classList.contains("active") &&
            !navLinks.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            navLinks.classList.remove("active");

        }

    });


    /* =================================
       7. CLOSE MENU WITH ESCAPE
    ================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            navLinks.classList.remove("active");

        }

    });

}


/* =================================
   8. SCROLL REVEAL
================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    /*
                       Stop observing after
                       the animation happens.
                    */

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});
