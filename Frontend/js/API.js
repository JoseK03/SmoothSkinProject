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
        const marcaproducto = await fetch(`${urlProductos}/one/${marca}`);
        console.log(marcaproducto);
        return marcaproducto.json()
    } catch (error) {
        console.log(error);
    }
}

export async function getUnproducto(id){
    try {
        const detalleProducto = await fetch(`${urlProductos}/uno/${id}`);
        console.log(detalleProducto);
        return detalleProducto.json();
    } catch (error) {
        
    }
}

export async function insertProducto(data){
    try {
        const producto = await fetch(`${urlProductos}/add`,{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        });

        const response = await producto.json();
        return response;
    } catch (error) {
        
    }
}