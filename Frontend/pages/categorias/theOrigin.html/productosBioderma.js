import {getAllProductos} from "../../../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

async function mostrarProductos() {
    const data = await getAllProductos();
    data.forEach((producto,index) => {
        const { _id, nombre_producto, marca, descripcion, precios } = producto;
        if (marca == "Bioderma") {
            const bodycard = document.getElementById('cajaBioderma');
            const precioMasEconomico = Math.min(...precios.map(precio => precio.valor));
            bodycard.innerHTML += `
                <div class="tarjeta">
                    <a href="./acidoHyaluronico.html">
                        <img src="../../../assets/imgs/ordinary/Acido-hyaluronico.png"  alt="Imagen de piel suave">
                    <div class="infoTarjeta">
                        <h6>${nombre_producto}</h6>
                        <p>${marca}</p>
                    </div>
                    </a>
                </div>
        `}})}


