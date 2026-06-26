const btn = document.getElementById("theme-btn");
btn.addEventListener("click", () => { document.body.classList.toggle("dark-mode") });
// Sauvegarde LocalStorage
if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}
// Navbar Scroll
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

// Compteur animmés
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
// Filtrage dynamique

const section = document.querySelectorAll("section");

for (let sect of section){
    obs.observe(sect);
}
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".freelance-card");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute ("data-category");

        cards.forEach(card => {
            if (category === "all" || card.getAttribute("data-category")=== category){
                card.style.display = "block";
            } else{
                card.style.display = "none";
            }
        });
    });
});
// validation du formulaire
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let isValid = true
    const name = document.getElementById("name").value.trim();
    if (isValid){
        console.log("FORMULAIRE OK")
        document.getElementById("sucessMessage").textContent = "Message envoyer avec succes";
        form.reset();
    }
     
    

    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    // reset erreurs
    document.getElementById("nameError").textContent="";
     
    document.getElementById("emailError").textContent="";
    document.getElementById("messageError").textContent="";
    document.getElementById("sujetError").textContent="";
    // Nom
    if (name===""){
        document.getElementById("nameError").textContent= "Nom obligatoire";
        isValid = false;
    }
    
    //Email (regex simple)
   if (!email.includes("@")){
    document.getElementById("emailError").textContent = "Email invalide";
    isValid = false;
   }
    // Message
   if (message.lenght < 5){
    document.getElementById("messageError").textContent = "Minimum 5 caracteres";
    isValid = false;
   }
   // succes
   if (isValid){
    document.getElementById("succesMessage").textContent = "Message envoyer avec succes";
    form.reset();
   }
   
       
   
});


