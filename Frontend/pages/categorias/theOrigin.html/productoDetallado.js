import {getUnProducto} from "../../../js/API.js";

document.addEventListener('DOMContentLoaded', () => {
    mostrarProductosBioderma();
});

async function mostrarProductosBioderma(){
    const data = await mostrarProductosBioderma();
    const body = document.getElementById('container');
}