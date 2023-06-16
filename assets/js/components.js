/* Cada uno de estas funcionews crea un componente html, que servira para crear una una plantilla
 de imagenes y una pagina de forma dinamica */


/* ===== Esta funcion crear el contenedor de la pagina de 10 imagenes =====*/
const newPage = (i, tag) => {
    const container = document.createElement(`section`);
    container.classList.add(`masonry`);
    container.setAttribute("data-page", `${i}`);

    const content =`
    <div class="info">
        <h1 class="title">ShowCase</h1>
        <p class="text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    `
    
    container.innerHTML = content;
    tag.appendChild(container);
    
    const selector = document.querySelector(`section[data-page="${i}"]`);
    return (selector);
}


/* ===== Esta funcion crear el un nuevo item del pagination =====*/
const newPagination = (i, tag) => {
    const container = document.createElement(`li`);
    container.classList.add("item__page");
    container.setAttribute("data-item-pagination", `${i}`);

    container.innerHTML=(i+1);

    tag.appendChild(container)

    const selector = document.querySelector(`section[data-item-pagination="${i}"]`);
    return (selector);
}



/* ===== Esta funcion crear el contenedor de la plantilla de 5 imagenes =====*/
const newContainer = (i, tag) =>{
    const container = document.createElement(`section`);
    container.classList.add(`masonry__grid`);
    container.setAttribute("data-container", `${i}`)
    
    tag.appendChild(container);
    
    const selector = document.querySelector(`section[data-container="${i}"]`);
    return (selector)
    
}

export const components = {
    newContainer,
    newPage,
    newPagination
}