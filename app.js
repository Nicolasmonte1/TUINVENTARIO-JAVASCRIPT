// INGRESO DE PRODUCTOS A INVENTARIO

const addProducto = document.querySelector('#agregarProducto')
const inputProducto = document.querySelector('#producto')
const inputColor = document.querySelector('#color')
const inputTalle = document.querySelector('#talle')
const inputCantidad = document.querySelector('#cantidad')
const ingresoStock = document.querySelector("#ingresoStock")
const salidaStock = document.querySelector("#salidaStock")

// DEFINO EL ARRAY PRODUCTOS Y JSON PARA PUSHEAR AL STORAGE

let productos;

const StockProductosLS = JSON.parse(localStorage.getItem("StockProductos"));

if (StockProductosLS) {
    productos = StockProductosLS;
} else {
    productos = [];
}

console.log(productos);


// AGREGO FUNCIONALIDAD A LOS BOTONES DE AGREGAR Y SACAR STOCK

salidaStock.addEventListener('click', (event) => {
    event.preventDefault()

    if (inputCantidad.value <= 0 || inputCantidad.value === '') {
        return
    }

    const producto = {
        producto: inputProducto.value,
        color: inputColor.value,
        talle: inputTalle.value,
        cantidad: - inputCantidad.value,

    }

    productos.push(producto)

    agregar(productos);

    localStorage.setItem("StockProductos", JSON.stringify(productos));

})


ingresoStock.addEventListener('click', (event) => {
    event.preventDefault()

    if (inputCantidad.value <= 0 || inputCantidad.value === '') {
        return
    }

    const producto = {
        producto: inputProducto.value,
        color: inputColor.value,
        talle: inputTalle.value,
        cantidad: inputCantidad.value,

    }

    productos.push(producto)

    agregar(productos);

    localStorage.setItem("StockProductos", JSON.stringify(productos));

})


// DEFINO LA FUNCION PARA CREAR ELEMENTOS EN EL ARRAY

const contenedorProductos = document.querySelector("#contenedorProductos");

const cargarProductos = document.querySelector('cargarProductos');  

const botonBuscar = document.querySelector("#botonBuscar");
const buscarValue = document.querySelector("#buscarValue"); 

function agregar(busqueda) {

    contenedorProductos.innerHTML = `
                <tr>
                    <th class="tituloTabla">Producto</th>
                    <th class="tituloTabla">Color</th>
                    <th class="tituloTabla">Talle</th>
                    <th class="tituloTabla">Cantidad</th>
                </tr>
    `
    ;

    busqueda.forEach(producto => {

    const tr = document.createElement("tr");
    tr.innerHTML = `

            <td>${producto.producto}</td>
            <td>${producto.color}</td>
            <td>${producto.talle}</td>
            <td>${producto.cantidad}</td>

    `;

    contenedorProductos.append(tr);

})
}

agregar(productos);
agregar(StockProductosLS);


// AGREGO FUNCIONALIDAD A LOS BOTONES DE FILTRO Y OTRAS PROPIEDAS DENTRO DEL ARRAY

let mostrar = document.getElementById('mostrarMov');

mostrar.addEventListener("click", () => {

    agregar(productos);
})


botonBuscar.addEventListener("click", () => {

        const busquedaProductos = productos.filter(producto => producto.producto == buscarValue.value);

        agregar(busquedaProductos);
})


const sumBar = document.querySelector("#sumBar");

const sum = productos.reduce((suma, producto) => suma + producto.cantidad, 0)

console.log(sum)










