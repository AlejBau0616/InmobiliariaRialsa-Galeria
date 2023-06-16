/* ===== Este codigo controla toda la funcionalidad del pagination =====*/

const itemPagination = document.querySelectorAll("[data-item-pagination]");
const itemPage = document.querySelectorAll("[data-page]");
const continueButton = document.querySelector("[data-continue]");
const backButton = document.querySelector("[data-back]");
let contador = 0;


/* ===== Estas clases son usadas para dar funcionalidad al slider =====*/
const HTMLClass= {
    show: "show",
    active: "active"
}


/* ===== Esta funcion se encarga de alternar una clase a un elemento =====*/
const activeItem = (item, i, className) => {item[i].classList.toggle(className);}


/* ===== Esta funcion desactiva el elemento actual y activa el seleccionado por medio del metodo =====*/
const handleChange = (array, index, className, change, method = methods.default) => {
    activeItem(array, index, className);
    index = method(index, change, array);
    activeItem(array, index, className);

    parent.location="index.html#"

    return index;
}


/* ===== Estos metodos se encargan de redireccionar el elemento que se debe de activar =====*/
const methods = {
    continue: (index, change, array) => (index < (array.length-1))? index = change : index = 0,
    back: (index, change, array) => (index == 0)? index = (array.length-1) : index = change,
    default: (index, change) => index=change,
}


/* ===== Es la renderizacion inicial de la pagina =====*/
const renderInitial = () => {
    activeItem(itemPagination, contador, HTMLClass.active)
    activeItem(itemPage, contador, HTMLClass.show);
}


/* ===== Registra el click del elemento al que se quiere redireccionar y actuliza que elemento esta activo =====*/
itemPagination.forEach((item, index) => {
    return item.addEventListener("click", () => {
        const newcontador = handleChange(itemPagination, contador, HTMLClass.active, index);
                            handleChange(itemPage, contador, HTMLClass.show, index);
        contador=newcontador;
    })
})


/* ===== Redirecciona al elemento siguiente =====*/
continueButton.addEventListener("click", () => {
    const newcontador = handleChange(itemPagination, contador, HTMLClass.active, (contador+1), methods.continue);
    handleChange(itemPage, contador, HTMLClass.show, (contador+1), methods.continue);
    contador=newcontador;
})

/* ===== Redirecciona al elemento anterior =====*/
backButton.addEventListener("click", () => {
    const newcontador = handleChange(itemPagination, contador, HTMLClass.active, (contador-1), methods.back);
    handleChange(itemPage, contador, HTMLClass.show, (contador-1), methods.back);
    contador=newcontador;
})


renderInitial();