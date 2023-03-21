// Escribe tu código aquí.
function obtenerStringsMayores(string, array) {
  const resultado = array.filter(str => str.length > string.length);
  return resultado;
}

function imprimirStringsMayores(string, array) {
  const stringsMayores = obtenerStringsMayores(string, array);
  const contenedorResultados = document.createElement("ul");

  stringsMayores.forEach(str => {
    const resultadoElemento = document.createElement("li");
    resultadoElemento.textContent = str;
    contenedorResultados.appendChild(resultadoElemento);
  });

  document.body.appendChild(contenedorResultados);
}

// Ejemplo de uso:
const array = ["hola", "esto", "es", "un", "ejemplo"];
console.log("hola");
