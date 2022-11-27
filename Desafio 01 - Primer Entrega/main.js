

const comprarEntrada = () => {
    let pelicula = '';
    let cantidadTkt = 0;
    let precio = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        pelicula = prompt('¿Que peliculas quieren ver ? : comedia - terror - drama').toUpperCase();
       
        switch (pelicula) {
            case 'COMEDIA':
                precio = 1200;
                break;
            case 'TERROR':
                precio = 1200;
                break;
            case 'DRAMA':
                precio = 1200;
                break;
            default:
                alert('La opcion seleccionada no esta en cartelera si desea ver algunos de nuestrostitulos vuelva a ingresar');
                precio = 0;
                cantidadValidada = 0;
                
        }

        cantidadTkt = parseInt(prompt('¿Cuántas entradas quieren comprar?'));
        let cantidadValidada = validarCantidad(cantidadTkt);
        totalCompra += precio * cantidadValidada

        
        seguirComprando = confirm('¿Querés comprar mas entradas ?')
        
    } while (seguirComprando);
    

    const totalConDescuento = aplicarDescuento(totalCompra);
    
    alert("El total de tu compras es $ "+ totalConDescuento )
   
};
//*****************Validala cantidad de entradas compradas *********/
const validarCantidad = (cantidad) => {
    while (Number.isNaN(cantidad) || cantidad <= 0) {
        if (cantidad <= 0) {
            alert('Debe ingresar una cantidad válida.')
        } else {
            alert('Debe agregar un número.')
        }
        cantidad = parseInt(prompt('¿Cuántas entradas queres comprar?'));
    }

    return cantidad;
};
//*********************** Calcula el descuento si la compra es = o mayor que $ 3.600 *********************/
const aplicarDescuento = (totalCompra) => {
    let totalConDescuento = 0;
    if (totalCompra >= 3600) {
        totalConDescuento = totalCompra * 0.90;
        return totalConDescuento;
    } else {
        return totalCompra;
    }
    
};

comprarEntrada();

