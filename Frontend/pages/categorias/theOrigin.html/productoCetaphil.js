import {getAllProductos} from "../../../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductosCetaphil();
});

async function mostrarProductosCetaphil() {
    const data = await getAllProductos();
    data.forEach((producto,index) => {
        const { _id, nombre_producto, marca, descripcion, precios , imagen} = producto;
        if (marca == "Cetaphil") {
            const bodycard = document.getElementById('cajacetaphil');
            const precioMasEconomico = Math.min(...precios.map(precio => precio.valor));
            bodycard.innerHTML += `
                <div class="tarjeta">
                    <a href="./acidoHyaluronico.html">
                        <img src="../../../assets/imgs/cetaphil/${imagen}"  alt="Imagen de piel suave">
                    <div class="infoTarjeta">
                        <h6>${nombre_producto}</h6>
                        <p>${precios[0].precio_cruz_verde}</p>
                    </div>
                    </a>
                </div>
        `}})}
