let appTitle = "Kodeloftet Gruppe 10 Recap";

//Finne elementet
let mainTitleElement = document.createElement("h1");

//Lag det nye alementet
let bodyElement = document.querySelector("body");

//Og konfigurer det 
mainTitleElement.textContent = "Hello";

//Sett det i et dokument
bodyElement.append(mainTitleElement);


let imageList = [
    {
        name: "Sommer i Bergen",
        artist: "Tor Fisker",
        src: "images/sommer-i-bergen.jpeg",
    },
    
    {
        name: "Høst",
        artist: "Marita",
        src: "images/høst.jpeg",
    },
];


for (let image of imageList) {

    let imageElement = createImageCard(image); 
    bodyElement.append(imageElement);
}

let image1 = {
    name: "Sommer i Bergen",
    artist: "Tor Fisker",
    src: "images/sommer-i-bergen.jpeg",
};



let imageElementA = createImageCard(image1);
bodyElement.append(imageElementA);


// <img />


let image2 = {
    name: "Høst",
    artist: "Marita",
    src: "images/høst.jpeg",
};

let imageElementB = createImageCard(image2);
bodyElement.append(imageElementB);



function createImageCard(image1) {

//Bilde elementer <img src =""
let imageShowcaseElement = document.createElement("img");
imageShowcaseElement.src = image1.src;
imageShowcaseElement.className ="image-card";

return imageShowcaseElement;

}

