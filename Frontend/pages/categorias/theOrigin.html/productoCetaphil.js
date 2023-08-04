import {getAllProductos} from "../../../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductosCetaphil();
});

async function mostrarProductosCetaphil() {
    const data = await getAllProductos();
    data.forEach((producto,index) => {
        const { _id, nombre_producto, marca, descripcion, precios } = producto;
        if (marca == "Cetaphil") {
            const bodycard = document.getElementById('cajacetaphil');
            const precioMasEconomico = Math.min(...precios.map(precio => precio.valor));
            bodycard.innerHTML += `
                <div class="tarjeta">
                    <a href="./acidoHyaluronico.html">
                        <img src="../../../assets/imgs/cetaphil/locion-humectante.png"  alt="Imagen de piel suave">
                    <div class="infoTarjeta">
                        <h6>${nombre_producto}</h6>
                        <p>${marca}</p>
                    </div>
                    </a>
                </div>
        `}})}
