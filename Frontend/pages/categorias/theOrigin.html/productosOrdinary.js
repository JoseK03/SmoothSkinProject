import {getAllProductos} from "../../../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

async function mostrarProductos() {
    const data = await getAllProductos();
    data.forEach((producto,index) => {
        const { _id, nombre_producto, marca, descripcion, precios } = producto;
        if (marca == "The Ordinary") {
            const bodycard = document.getElementById('caja');
            const precioMasEconomico = Math.min(...precios.map(precio => precio.valor));
            bodycard.innerHTML += `
                <div class="tarjeta">
                    <a href="./acidoHyaluronico.html">
                        <img src="../../../assets/imgs/ordinary/Acido-hyaluronico.png"  alt="Imagen de piel suave">
                    <div class="infoTarjeta">
                        <h6>${nombre_producto}</h6>
                        <p>${precios[0].precio_cruz_verde}</p>
                    </div>
                    </a>
                </div>
        `}})}

            