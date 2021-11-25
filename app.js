// table creation

let table1 = ["Pommes", "Poires", "Ananas", "Mandarine", "Orange"];
let table2 = [5, 15, 35, 8, 16, 11, 42];
let table3 = [5, "Pomme", 65, "Poires", 35, "Ananas", 8, "Mandarine", "Orange"];

console.log(table1);
console.log(table2);
console.log(table3);


//table within a table

let multi = [
    5,
    "Citron",
    "Cacahuete", 35,
    ["test", "bidimentionnel"],
    ["test2", "bidimensionnel2"]
];
console.log(multi);

//index

let fruits = ["Ananas", "Mangue", "Pomme", "Poire"];
//Recup la valeur avec son indice
let message = "J'ai mangé une bonne tarte au" + fruits[2];
console.log(message);

let message2 = "J'ai mangé une bonne tarte au" + fruits[3].toUpperCase();
console.log(message2);

//concaténer
let numbers = [5, 6, 10, 15];
let somme = numbers[1] + numbers[3];
console.log(somme);

let position = ["200px", "50px", "65px", "50px"];
let newPosition = (parseInt(position[0]) + parseInt(position[2])) +"px";
console.log(newPosition);


let floatingNumber = 5.456;
let myArray = [Math.random(), Math.random()*100, Math.ceil(floatingNumber)];
console.log(myArray);

//table multidimensionnel

let multi2 = [
    "string",
    ["Citrons", "Mangue"],
    ["Tomates", "Courgette"]
];

let fruit = multi2[1] [0];
let vegetable = multi2[2] [1];
console.log("J'aime le" + fruit.toLowerCase());
console.log("J'aime le légume qui ressemble aux " + vegetable.toLowerCase());

//with while

let myArray2 = [5, 8, 12, 16, 21];
let i = 0;

while (i < myArray2.length) {
    let calcul = myArray2[i] * 2;
    console.log(myArray2[i] + " * 2 = " + calcul);
}

//for

let myArray3 = [5, 8, 15, 16, 21];
for (let i = 0; i < myArray3.length; i++) {
    let calcul2 = myArray3[i] * 2;
    console.log(myArray3[i] + " *2 = " + calcul2);
}

//for... of

let myArray4 = [5, 8, 15, 16, 21];
for (let value of myArray4) {
    let calcul3 = value * 2;
    console.log(value + " * 2 = " + calcul3);
}

//for...in //renvoie à l'index de l'élément courant

for (let index in  myArray4) {
    let calcul4 = myArray4[index] * 2;
    console.log(myArray4[index] + " * 2 = " + calcul4);
}

// afficher tableau dans un élément

let myArray5 = ["les gars", "les filles", "la classe", "world"];
document.getElementById("p1").innerHTML += myArray5;


//push //ajout fin tableau

let fruits2 = ["Pomme" , "Poire", "Ananas"];

let newLenght = fruits2.push("Citron", "Ananas");
console.log(fruits2);
console.log("nouvelle taille: " + newLenght);

//pop // fin de tableau

let fruits3 = ["Pomme" , "Poire", "Ananas"];
let deletedValue = fruits3.pop();
console.log(deletedValue);
console.log("nouvelle taille: " + fruits3.length);

// shift // supprimer premier élément d'un tableau et retourne l'élément supprimé

let fruits4 = ["Pomme" , "Poire", "Ananas"];
let deletedValue1 = fruits4.shift();
console.log(deletedValue1);
console.log("Nouvelle taille: " + fruits4.length);

//unshift //ajouter des éléments en début de tableau et  retourner la nouvelle taille du tableau.

let fruits5 = ["Pomme" , "Poire", "Ananas"];
let newLenghts1 = fruits5.unshift("Citrons", "Bananes");
console.log(fruits5);
console.log("Nouvelle taille" + newLenghts1);

//splice // ajouter,  supprimer  remplacer des éléments n’importe où dans un tableau.

let fruits6 = ["Pomme" , "Poire", "Ananas"];
fruits6.splice(1,0,"Bananes", "Ananas", "Citrons");
console.log(fruits6);


//join // concaténe les # valeurs d'un tableau

let fruits7 = ["Pomme" , "Poire", "Ananas", "Mangue" , "Citrons"];
let fruitsPreferes = fruits7.join();
console.log(fruitsPreferes);
















