const btn = document.getElementById("theme-btn");
btn.addEventListener("click", () => { document.body.classList.toggle("dark-mode") });
// Sauvegarde
if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}
);
topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
// Compteurs ANIMES
const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const updateCounter = () => {
        const increment = target / 100;
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }

    };
    updateCounter();
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains("counter")) {
                startCounter(entry.target);
            }
            entry.target.classList.add("show");
        }
    });
});
document.querySelectorAll(".counter, .fade-in").forEach(el => {
    observer.observe(el);
});

// commite 7 
const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible"); 
        }
    });
}, {
});

const section = document.querySelectorAll("section");

for (let sect of section){
    obs.observe(sect);
}