// ======================================
// MODERN PORTFOLIO JAVASCRIPT
// ======================================

// ===== Smooth Scroll =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// ======================================
// Fade In Animation
// ======================================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll(".fade-in").forEach(el => {

    observer.observe(el);

});


// ======================================
// Back To Top Button
// ======================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    topBtn.style.display =

        window.scrollY > 400 ? "flex" : "none";

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ======================================
// Dark Mode
// ======================================

const toggle = document.getElementById("theme-toggle");

if (toggle) {

    toggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

            toggle.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "light");

            toggle.textContent = "🌙";

        }

    });

}


// Load Saved Theme

window.addEventListener("load", () => {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

        if (toggle) {

            toggle.textContent = "☀️";

        }

    }

});


// ======================================
// Navbar Scroll Effect
// ======================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 60) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ======================================
// Typing Effect
// ======================================

const texts = [

    "Full Stack Developer",

    "Frontend Engineer",

    "SaaS Builder",

    "Automation Developer"

];

let index = 0;

let charIndex = 0;

let currentText = "";

let isDeleting = false;

const typingElement = document.querySelector(".hero-role");

function typeEffect() {

    if (!typingElement) return;

    currentText = texts[index];

    if (isDeleting) {

        charIndex--;

    } else {

        charIndex++;

    }

    typingElement.textContent = currentText.substring(0, charIndex);

    if (!isDeleting && charIndex === currentText.length) {

        isDeleting = true;

        setTimeout(typeEffect, 1500);

        return;

    }

    if (isDeleting && charIndex === 0) {

        isDeleting = false;

        index = (index + 1) % texts.length;

    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);

}

typeEffect();

// ======================================
// Project Card Hover Animation
// ======================================

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x - rect.width / 2) / 25;

        const rotateX = (rect.height / 2 - y) / 25;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});

// Animated Counters

const counters = document.querySelectorAll(".stat h3");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const update = () => {

        if(count < target){

            count++;

            counter.innerText = count + "+";

            requestAnimationFrame(update);

        }

    };

    update();

});