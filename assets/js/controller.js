/* ===== Este codigo recorre un arreglo y a medida de que aumente creara plantillas y nuevas paginas dinamicamente, simulando que el usuario ira agregando mas imagenes =====*/


import { components } from "./components.js";

const { newContainer, newPage, newPagination } = components;

const main = document.querySelector('[data-main]');
const pagination = document.querySelector("[data-pagination]");

/* ===== Este arreglo de objetos simula una peticion de los datos de servidor que se almacenaran en esta variable =====*/
const images = [
    {
        img: "./assets/img/Prueba1.jpg",
        titulo: "prueba 1",
        subtitulo: "prueba 1",
        crossOriginIsolated:true
    },
    {
        img: "./assets/img/Prueba2.jpg",
        titulo: "prueba 2",
        subtitulo: "prueba 2"
    },
    {
        img: "./assets/img/Prueba3.jpg",
        titulo: "prueba 3",
        subtitulo: "prueba 3"
    },
    {
        img: "./assets/img/Prueba4.jpg",
        titulo: "prueba 4",
        subtitulo: "prueba 4"
    },
    {
        img: "./assets/img/Prueba5.jpg",
        titulo: "prueba 5",
        subtitulo: "prueba 5"
    },
    {
        img: "./assets/img/Prueba1.jpg",
        titulo: "prueba 6",
        subtitulo: "prueba 7"
    },
    {
        img: "./assets/img/Prueba2.jpg",
        titulo: "prueba 7",
        subtitulo: "prueba 7"
    },
    {
        img: "./assets/img/Prueba3.jpg",
        titulo: "prueba 8",
        subtitulo: "prueba 8"
    },
    {
        img: "./assets/img/Prueba4.jpg",
        titulo: "prueba 9",
        subtitulo: "prueba 9"
    },
    {
        img: "./assets/img/Prueba5.jpg",
        titulo: "prueba 10",
        subtitulo: "prueba 10"
    },
    {
        img: "./assets/img/Prueba1.jpg",
        titulo: "prueba 1",
        subtitulo: "prueba 1"
    },
    {
        img: "./assets/img/Prueba2.jpg",
        titulo: "prueba 2",
        subtitulo: "prueba 2"
    },
    {
        img: "./assets/img/Prueba3.jpg",
        titulo: "prueba 3",
        subtitulo: "prueba 3"
    },
    {
        img: "./assets/img/Prueba1.jpg",
        titulo: "prueba 1",
        subtitulo: "prueba 1"
    },
    {
        img: "./assets/img/Prueba2.jpg",
        titulo: "prueba 2",
        subtitulo: "prueba 2"
    },
    {
        img: "./assets/img/Prueba3.jpg",
        titulo: "prueba 3",
        subtitulo: "prueba 3"
    },
    {
        img: "./assets/img/Prueba4.jpg",
        titulo: "prueba 4",
        subtitulo: "prueba 4"
    },
    {
        img: "./assets/img/Prueba5.jpg",
        titulo: "prueba 5",
        subtitulo: "prueba 5"
    },
    {
        img: "./assets/img/Prueba1.jpg",
        titulo: "prueba 6",
        subtitulo: "prueba 7"
    },
    {
        img: "./assets/img/Prueba2.jpg",
        titulo: "prueba 7",
        subtitulo: "prueba 7"
    },
    {
        img: "./assets/img/Prueba3.jpg",
        titulo: "prueba 8",
        subtitulo: "prueba 8"
    },
    {
        img: "./assets/img/Prueba4.jpg",
        titulo: "prueba 9",
        subtitulo: "prueba 9"
    },
    {
        img: "./assets/img/Prueba5.jpg",
        titulo: "prueba 10",
        subtitulo: "prueba 10"
    },
    {
        img: "./assets/img/Prueba1.jpg",
        titulo: "prueba 1",
        subtitulo: "prueba 1"
    },
    {
        img: "./assets/img/Prueba2.jpg",
        titulo: "prueba 2",
        subtitulo: "prueba 2"
    },
    {
        img: "./assets/img/Prueba3.jpg",
        titulo: "prueba 3",
        subtitulo: "prueba 3"
    }
    
]



/* ===== Se definen propiedades de de cada platilla y paginas y cuantas images se requieren =====*/
const propertys = {
    page:{
        contador:0,
        limit:10
    },
    bloque:{
        contador:0,
        limit:5
    }
}


/* ===== Esta funcion renderiza cada imagen obtenidad de nuestra BD y crea toda la estructura para que tome los estilos adecuados =====*/
const itemImage = (tag, data, ul) => {
    const { bloque, page } = data;

    let createPage = newPage(page.contador, tag);
    let createContainer = newContainer(bloque.contador, createPage);
    let itemPagination = newPagination(page.contador, ul);

    images.map((images, index) => {
        const { img, titulo, subtitulo } = images;

        /* ===== Estos if´s definen la estructuras de las plantillas y paginas =====*/
        if(index == page.limit){
            page.limit = page.limit+10;
            page.contador++;
            createPage = newPage(page.contador, main);
            itemPagination = newPagination(page.contador, ul) 
        }

        if(index == bloque.limit){
            bloque.limit = bloque.limit+5;
            bloque.contador++;
            createContainer = newContainer(bloque.contador, createPage); 
        }
        
        const item = document.createElement("div");
        item.classList.add("item")

        const content = `
            <div class="work__overlay">
                <img src="${img}" alt="prueba img">
            </div>
            <div class="work__content">
                <h2 class="title">${titulo} </h2>
                <p class="subtitle"> ${subtitulo} </p>
            </div>
            <a href="#" class="link__item link__img"></a>
        `;

    item.innerHTML = content;
    createContainer.appendChild(item);
    
})}

itemImage(main, propertys, pagination)


