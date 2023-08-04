import {getAllProductos} from "../../../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductosBioderma();
});

async function mostrarProductosBioderma() {
    const data = await getAllProductos();
    data.forEach((producto,index) => {
        const { _id, nombre_producto, marca, descripcion, precios , imagen } = producto;
        if (marca == "Bioderma") {
            const bodycard = document.getElementById('cajaBioderma');
            bodycard.innerHTML += `
                <div class="tarjeta">
                    <a href="./productoDetallado.html">
                        <img src="../../../assets/imgs/bioderma/${imagen}"  alt="Imagen de piel suave">
                    <div class="infoTarjeta">
                        <h6>${nombre_producto}</h6>
                        <p>${precios[0].precio_cruz_verde}</p>
                    </div>
                    </a>
                </div>
        `}})}


