// Fade-In Animation

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

fadeElements.forEach((element) => {
    observer.observe(element);
});


// Dark Mode Toggle

const themeToggle = document.getElementById("theme-toggle");

// Load saved theme

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}

// Toggle Theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme","dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme","light");
    }
});

const text =
"Frontend Developer | React Developer | Problem Solver";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing-text").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 70);
    }
}

typeWriter();


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 150){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }
    });
});

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

