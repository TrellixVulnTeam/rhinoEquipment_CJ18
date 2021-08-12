function Racks(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const rackProfesional = new Racks("Profesional", "1140 usd", true);
const rackSemiProfesional = new Racks("Semiprofesional", "1050 usd", true);
const rackWallMount = new Racks("Wall mount", "940 usd", false);


let seleccionProducto = prompt("De que rack quiere conocer mas? Ingrese Profesional , Semiprofesional o Wall Mount");

if (seleccionProducto == "Profesional" || seleccionProducto == "profesional") {
    alert(`Producto: ${rackProfesional.nombre} \nPrecio: ${rackProfesional.precio} \nDisponibilidad: ${rackProfesional.stock}`)
} else if (seleccionProducto == "Semiprofesional" || seleccionProducto == "semiprofesional") {
    alert(`Producto: ${rackSemiProfesional.nombre} \nPrecio: ${rackSemiProfesional.precio} \nDisponibilidad: ${rackSemiProfesional.stock}`)
} else if (seleccionProducto == "Wall mount" || seleccionProducto == "wall mount") {
    alert(`Producto: ${rackWallMount.nombre} \nPrecio: ${rackWallMount.precio} \nDisponibilidad: ${rackWallMount.stock}`)
} else {
    alert('Usted no ha ingresado ningun producto. Pruebe de nuevo recargando la pagina.')
}


