const carrusel2 = document.querySelector('.segundo-carrusel');
const punto2 = document.querySelectorAll('.punto-card');

// Cuando CLICK en punto
    // Saber la posición de ese punto
    // Aplicar un transform translateX al grande
    // QUITAR la clase activo de TODOS puntos
    // AÑADIR la clase activo al punto que hemos hecho CLICK

// Recorrer TODOS los punto
punto2.forEach( ( cadaPunto2 , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto2[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i;
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -33;

        // MOVEMOS el grand
        carrusel2.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto2.forEach( ( cadaPunto2 , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto2[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto2[i].classList.add('activo')

    });
});