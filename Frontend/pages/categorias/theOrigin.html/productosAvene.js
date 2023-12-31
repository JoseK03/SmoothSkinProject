import {getAllProductos} from "../../../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductosAvene();
});

async function mostrarProductosAvene() {
    const data = await getAllProductos();
    data.forEach((producto,index) => {
        const { _id, nombre_producto, marca, descripcion, precios } = producto;
        if (marca == "Avene") {
            const bodycard = document.getElementById('cajaAvene');
            const precioMasEconomico = Math.min(...precios.map(precio => precio.valor));
            bodycard.innerHTML += `
                <div class="tarjeta">
                    <a href="./acidoHyaluronico.html">
                        <img src="../../../assets/imgs/avene/AguaTermal.png"  alt="Imagen de piel suave">
                    <div class="infoTarjeta">
                        <h6>${nombre_producto}</h6>
                        <p>${precios[0].precio_cruz_verde}</p>
                    </div>
                    </a>
                </div>
        `}})}


/* async function mostrarProductos() {
    const data = await getAllProductos();
    const bodycard = document.getElementById('caja');
    data.forEach((producto, index) => {
        const { _id, nombre_producto, marca, descripcion , precios} = producto;
        if(marca == "The Ordinary"){
            bodycard.innerHTML += `
                <div class="tarjeta">
                    <a href="./acidoHyaluronico.html">
                        <img src="../../../assets/imgs/ordinary/Acido-hyaluronico.png"  alt="Imagen de piel suave">
                    <div class="infoTarjeta">
                        <h6>${nombre_producto}</h6>
                        <p>${precios[0]}</p>
                    </div>
                    </a>
                </div>
        `;
        }
    });
} */