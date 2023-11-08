// 2-Texto que se lee más: Crea un botón que, al hacer clic, cambia el tamaño del texto
// de un elemento en el DOM para que sea más grande o más pequeño.


let texto = document.getElementById("texto");
let boton2 = document.getElementById("boton2");


    boton2.addEventListener("click", () => {
        texto.classList.remove("cambio-chico")
        texto.classList.add("cambio-grande")
    });
      
    let boton = document.getElementById("boton");

    boton.addEventListener("click", () => {

        texto.classList.remove("cambio-grande");
        texto.classList.add("cambio-chico");

    });

    // -----------------------------------------------------------
    //Esta es otra forma que probe
    // yo queria aplicar aqui un ejemplo como el del boton de clase que al apretar cambiaba el fondo del viewport
    //pero aqui al apretar cambiaba el texto. No entiendo por que no funcionó :(

    // let botonA = document.getElementById("boton");
    // let parrafo = document.getElementById("parrafo")

    // function cambioTamanio(){
    //     parrafo.classList.toggle("cambio-tamanio")

    //    if(parrafo.classList.contains("cambio-tamanio")){
    //     boton.innerText="cambiar a letra chica"
    //    }else{
    //     boton.innerText = "cambiar a letra grande"
    //    }

    // };

    // botonA.addEventListener("click", cambioTamanio)

    
    
    
    
    


