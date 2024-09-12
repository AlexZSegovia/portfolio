// Array de frases
const frases = [
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "No cuentes los días, haz que los días cuenten.",
    "La mente es todo. Lo que pienses, eso serás.",
    "La felicidad es una mariposa que cuando la persigues siempre está fuera de tu alcance, pero que si te sientas silenciosamente puede posarse sobre ti.",
    "La mejor venganza es un gran éxito.",
    "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
    "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello."
];


// Función para generar una frase aleatoria
function generarFrase() {
    // Genera un índice aleatorio dentro del rango de la longitud del array de frases
    const indice = Math.floor(Math.random() * frases.length);
    // Obtiene la frase correspondiente al índice generado
    const fraseAleatoria = frases[indice];
    // Muestra la frase en el elemento con id="frase"
    document.getElementById("frase").innerText = fraseAleatoria;
}

// Verifica si el botón existe antes de agregar el listener
const botonGenerar = document.getElementById("btn-generar");
if (botonGenerar) {
    botonGenerar.addEventListener("click", generarFrase);
} else {
    console.error("El botón con id='btn-generar' no se encuentra en el documento.");
}