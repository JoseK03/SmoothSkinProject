import {getAllProductos, insertProducto} from "../../../js/API.js";

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

        //? LLAMAR FUNCIONES
        sendInfo();
    }

async function sendInfo(){
    const formAgregarProducto = document.querySelector('#formAgregarProducto');
    const nombreProducto = document.querySelector('#nombreProducto');
    const nombreMarca = document.querySelector('#nombreMarca');
    const descripcionProducto = document.querySelector('#descripcion');
    const usoUno = document.querySelector('#uso1');
    const usoDos = document.querySelector('#uso2');
    const precioCruzVerde = document.querySelector('#precioCruzVerde');
    const precioFarmatodo = document.querySelector('#precioFarmatodo');
    const precioMedipiel = document.querySelector('#precioMedipiel');
    const precioPiel = document.querySelector('#precioPiel');
    const precioBellaPiel = document.querySelector('#precioBellaPiel');
    const categoriaProducto = document.querySelector('#categoriaProducto');
    const imagenProducto = document.querySelector('#imagenProducto');


    formAgregarProducto.addEventListener('submit',(e)=>{
        e.preventDefault();
        const data = {
            /* los de la izquierda debe estar igual al como estan nombradas en la base de datos
             */
            nombre_producto : nombreProducto.value,
            marca:nombreMarca.value,
            descripcion : descripcionProducto.value,
            usos:[usoUno.value,usoDos.value],
            precios:[precioCruzVerde.value,precioFarmatodo.value,precioMedipiel.value,precioPiel.value,precioBellaPiel.value],
            categoria : [categoriaProducto.value],
            imagen: imagenProducto.value
        }

        if(insertProducto(data)){
            swal("Datos enviados satisfactoriamente", "¡Enviado!", "success");
            setTimeout(()=>{
                window.location ='origin.html';
            },2000);
        }
    })
}

            