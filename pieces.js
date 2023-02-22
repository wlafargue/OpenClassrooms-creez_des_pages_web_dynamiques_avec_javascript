import { ajoutListenersAvis, ajoutListenerEnvoyerAvis, afficherAvis } from "./avis.js";
//Récupération des pièces eventuellement stockées dans le localStorage
let pieces = window.localStorage.getItem("pieces");

<<<<<<< HEAD
if (pieces === null){
    // Récupération des pièces depuis l'API
    const reponse = await fetch('http://localhost:8081/pieces/');
    pieces = await reponse.json();
    // Transformation des pièces en JSON
    const valeurPieces = JSON.stringify(pieces);
    // Stockage des informations dans le localStorage
    window.localStorage.setItem("pieces", valeurPieces);
}else{
    pieces = JSON.parse(pieces);
=======
if (pieces === null) {
	// Récupération des pièces depuis l'API
	const reponse = await fetch("http://localhost:8081/pieces/");
	pieces = await reponse.json();
	// Transformation des pièces en JSON
	const valeurPieces = JSON.stringify(pieces);
	// Stockage des informations dans le localStorage
	window.localStorage.setItem("pieces", valeurPieces);
} else {
	pieces = JSON.parse(pieces);
>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b
}
// on appel la fonction pour ajouter le listener au formulaire
ajoutListenerEnvoyerAvis();

<<<<<<< HEAD
function genererPieces(pieces){
    for (let i = 0; i < pieces.length; i++) {

        const article = pieces[i];
        // Récupération de l'élément du DOM qui accueillera les fiches
        const sectionFiches = document.querySelector(".fiches");
        // Création d’une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        pieceElement.dataset.id = pieces[i].id
        // Création des balises 
        const imageElement = document.createElement("img");
        imageElement.src = article.image;
        const nomElement = document.createElement("h2");
        nomElement.innerText = article.nom;
        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
        const categorieElement = document.createElement("p");
        categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
        const stockElement = document.createElement("p");
        stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
        //Code ajouté
        const avisBouton = document.createElement("button");
        avisBouton.dataset.id = article.id;
        avisBouton.textContent = "Afficher les avis";
        
        // On rattache la balise article a la section Fiches
        sectionFiches.appendChild(pieceElement);
        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
        //Code aJouté
        pieceElement.appendChild(avisBouton);
    
     }
     ajoutListenersAvis();
=======
function genererPieces(pieces) {
	for (let i = 0; i < pieces.length; i++) {

		const article = pieces[i];
		// Récupération de l'élément du DOM qui accueillera les fiches
		const sectionFiches = document.querySelector(".fiches");
		// Création d’une balise dédiée à une pièce automobile
		const pieceElement = document.createElement("article");
		pieceElement.dataset.id = pieces[i].id;
		// Création des balises 
		const imageElement = document.createElement("img");
		imageElement.src = article.image;
		const nomElement = document.createElement("h2");
		nomElement.innerText = article.nom;
		const prixElement = document.createElement("p");
		prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
		const categorieElement = document.createElement("p");
		categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
		const descriptionElement = document.createElement("p");
		descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
		const stockElement = document.createElement("p");
		stockElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
		//Code ajouté
		const avisBouton = document.createElement("button");
		avisBouton.dataset.id = article.id;
		avisBouton.textContent = "Afficher les avis";

		// On rattache la balise article a la section Fiches
		sectionFiches.appendChild(pieceElement);
		pieceElement.appendChild(imageElement);
		pieceElement.appendChild(nomElement);
		pieceElement.appendChild(prixElement);
		pieceElement.appendChild(categorieElement);
		pieceElement.appendChild(descriptionElement);
		pieceElement.appendChild(stockElement);
		//Code aJouté
		pieceElement.appendChild(avisBouton);

	}
	ajoutListenersAvis();
>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b
}

genererPieces(pieces);

<<<<<<< HEAD
for(let i = 0; i < pieces.length; i++){
    const id = pieces[i].id;
    const avisJSON = window.localStorage.getItem(`avis-piece-${id}`);
    const avis = JSON.parse(avisJSON);

    if(avis !== null){
        const pieceElement = document.querySelector(`article[data-id="${id}"]`);
        afficherAvis(pieceElement, avis)
    }
=======
for (let i = 0; i < pieces.length; i++) {
	const id = pieces[i].id;
	const avisJSON = window.localStorage.getItem(`avis-piece-${id}`);
	const avis = JSON.parse(avisJSON);

	if (avis !== null) {
		const pieceElement = document.querySelector(`article[data-id="${id}"]`);
		afficherAvis(pieceElement, avis);
	}
>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b
}

 //gestion des boutons 
const boutonTrier = document.querySelector(".btn-trier");

boutonTrier.addEventListener("click", function () {
<<<<<<< HEAD
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
=======
	const piecesOrdonnees = Array.from(pieces);
	piecesOrdonnees.sort(function (a, b) {
		return a.prix - b.prix;
	});
	document.querySelector(".fiches").innerHTML = "";
	genererPieces(piecesOrdonnees);
>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b
});

const boutonFiltrer = document.querySelector(".btn-filtrer");

boutonFiltrer.addEventListener("click", function () {
	const piecesFiltrees = pieces.filter(function (piece) {
		return piece.prix <= 35;
	});
	document.querySelector(".fiches").innerHTML = "";
	genererPieces(piecesFiltrees);
});

//Correction Exercice
const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
<<<<<<< HEAD
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
     });
     document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
=======
	const piecesOrdonnees = Array.from(pieces);
	piecesOrdonnees.sort(function (a, b) {
		return b.prix - a.prix;
	});
	document.querySelector(".fiches").innerHTML = "";
	genererPieces(piecesOrdonnees);
>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b
});

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
<<<<<<< HEAD
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].prix > 35){
        noms.splice(i,1);
    }
}
console.log(noms)

=======
	const piecesFiltrees = pieces.filter(function (piece) {
		return piece.description;
	});
	document.querySelector(".fiches").innerHTML = "";
	genererPieces(piecesFiltrees);
});

const noms = pieces.map(piece => piece.nom);
for (let i = pieces.length - 1; i >= 0; i--) {
	if (pieces[i].prix > 35) {
		noms.splice(i, 1);
	}
}
console.log(noms);
//Création de l'en-tête

const pElement = document.createElement("p");
pElement.innerText = "Pièces abordables";
>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b
//Création de la liste
const abordablesElements = document.createElement("ul");
//Ajout de chaque nom à la liste
<<<<<<< HEAD
for(let i=0; i < noms.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
=======
for (let i = 0; i < noms.length; i++) {
	const nomElement = document.createElement("li");
	nomElement.innerText = noms[i];
	abordablesElements.appendChild(nomElement);
>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector(".abordables")
	.appendChild(pElement)
	.appendChild(abordablesElements);

const nomsDisponibles = pieces.map(piece => piece.nom);
const prixDisponibles = pieces.map(piece => piece.prix);

<<<<<<< HEAD
for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].disponibilite === false){
        nomsDisponibles.splice(i,1);
        prixDisponibles.splice(i,1);
    }
=======
for (let i = pieces.length - 1; i >= 0; i--) {
	if (pieces[i].disponibilite === false) {
		nomsDisponibles.splice(i, 1);
		prixDisponibles.splice(i, 1);
	}
>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b
}

const disponiblesElement = document.createElement("ul");

<<<<<<< HEAD
for(let i=0 ; i < nomsDisponibles.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
    disponiblesElement.appendChild(nomElement);
=======
for (let i = 0; i < nomsDisponibles.length; i++) {
	const nomElement = document.createElement("li");
	nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
	disponiblesElement.appendChild(nomElement);
>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b
}

const pElementDisponible = document.createElement("p");
pElementDisponible.innerText = "Pièces disponibles:";
document.querySelector(".disponibles").appendChild(pElementDisponible).appendChild(disponiblesElement);

<<<<<<< HEAD
const inputPrixMax = document.querySelector('#prix-max')
inputPrixMax.addEventListener('input', function(){
    const piecesFiltrees = pieces.filter(function(piece){
        return piece.prix <= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);  
})
=======
const inputPrixMax = document.querySelector("#prix-max");
inputPrixMax.addEventListener("input", function () {
	const piecesFiltrees = pieces.filter(function (piece) {
		return piece.prix <= inputPrixMax.value;
	});
	document.querySelector(".fiches").innerHTML = "";
	genererPieces(piecesFiltrees);
});
>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b

// Ajout du listener pour mettre à jour des données du localStorage
const boutonMettreAJour = document.querySelector(".btn-maj");
boutonMettreAJour.addEventListener("click", function () {
<<<<<<< HEAD
   window.localStorage.removeItem("pieces");
});
=======
	window.localStorage.removeItem("pieces");
});

await afficherGraphiqueAvis();

>>>>>>> 2d0f1ffa72063301e9f8700df73fffd524b13a3b
