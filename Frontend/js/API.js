const urlProductos = "http://localhost:8500/api/productos";

/*------------------------- productos API------------------------------ */

export async function getAllProductos(){
    try {
        const productos = await fetch(`${urlProductos}/get`)
        return productos.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getOneProducto(marca){
    try {
        const ciclistar = await fetch(`${urlProductos}/`)
    } catch (error) {
        
    }
}
