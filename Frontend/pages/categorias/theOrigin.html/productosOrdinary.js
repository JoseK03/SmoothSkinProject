import {getAllProductos} from "../../../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

async function mostrarProductos() {
    const data = await getAllProductos();
    data.forEach((producto,index) => {
        const { _id, nombre_producto, marca, descripcion, precios, imagen} = producto;
        if (marca == "The Ordinary") {
            const bodycard = document.getElementById('caja');
            const precioMasEconomico = Math.min(...precios.map(precio => precio.valor));
            bodycard.innerHTML += `
                <div class="tarjeta">
                    <a href="./productoDetallado.html">
                        <img src="../../../assets/imgs/ordinary/${imagen}"  alt="Imagen de piel suave">
                    <div class="infoTarjeta">
                        <h6>${nombre_producto}</h6>
                        <p>${precios[0].precio_cruz_verde}</p>
                    </div>
                    </a>
                </div>
        `}})
}

async function sendInfo(){
    const formAgregarProducto = document.querySelector('#formAgregarProducto');
    const nombreProducto = document.querySelector('#nombreProducto');
    const descripcionProducto = document.querySelector('#descripcion');
    const usoUno = document.querySelector('#uso1');
    const usoDos = document.querySelector('#uso2');
    const precioCruzVerde = documente.querySelector('#precioCruzVerde');
    const precioFarmatodo = document.querySelector('#precioFarmatodo');
    const precioMedipiel = document.querySelector('#precioMedipiel');
    const precioPiel = document.querySelector('#precioPiel');
    const precioBellaPiel = document.querySelector('#precioBellaPiel');


    formAgregarProducto.addEventListener('submit',(e)=>{
        e.preventDefault();
        const data = {
            /* los de la izquierda debe estar igual al como estan nombradas en la base de datos
             */
            nombre : nombreProducto.value,
            descripcion : descripcionProducto.value,

        }
    })
}

            