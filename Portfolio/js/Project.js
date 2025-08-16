const projets = [
   
    {
        titre: "Dépôt de Boissons",
        description: "Le dépôt est un espace de stockage organisé et fonctionnel, destiné à optimiser la gestion des marchandises. Il comprend des zones distinctes pour la réception, le stockage et l’expédition, avec des rayonnages modulables et des quais de chargement adaptés. Un système de gestion informatisé permet de suivre les stocks en temps réel et d’assurer la traçabilité des produits. Ce dépôt facilite la circulation des marchandises, sécurise le stockage et contribue à l’efficacité globale des opérations logistiques.",
        date: "2023-2025",
        images: ["Photo/Boisson.webp", "Photo/Depot.webp", "Photo/Juice.jpeg"]
    }
];

// Trier par date (plus récent en premier)
projets.sort((a, b) => a.date - b.date);

// Numérotation automatique
projets.forEach((projet, index) => {
    projet.numero = (index + 1).toString().padStart(2, "0");
});

let projetIndex = 0;

const img1 = document.getElementById("photo1");
const img2 = document.getElementById("photo2");
const img3 = document.getElementById("photo3");
const titreEl = document.getElementById("projet-titre");
const descEl = document.getElementById("projet-description");
const dateEl = document.getElementById("projet-date");
const numeroEl = document.getElementById("projet-numero");

function afficherProjet() {
    const projet = projets[projetIndex];
    img1.src = projet.images[0];
    img2.src = projet.images[1];
    img3.src = projet.images[2];
    titreEl.textContent = projet.titre;
    descEl.textContent = projet.description;
    dateEl.textContent = projet.date;
    numeroEl.textContent = projet.numero;
}

document.querySelector(".next-btn").addEventListener("click", () => {
    projetIndex = (projetIndex + 1) % projets.length;
    afficherProjet();
});

document.querySelector(".prev-btn").addEventListener("click", () => {
    projetIndex = (projetIndex - 1 + projets.length) % projets.length;
    afficherProjet();
});

// Initialisation
afficherProjet();

// Burger menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});
