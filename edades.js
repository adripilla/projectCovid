const fs = require('fs');

// Lee el archivo JSON-LD externo
const jsonldData = JSON.parse(fs.readFileSync('datos.jsonld', 'utf8'));

// Crea un objeto para almacenar las edades y sus frecuencias
const edadesFrecuencia = {};

// Recorre los datos JSON-LD y cuenta las edades
jsonldData.forEach((persona) => {
  const edad = persona.EDAD;
  if (edad !== undefined) {
    if (edadesFrecuencia[edad]) {
      edadesFrecuencia[edad]++;
    } else {
      edadesFrecuencia[edad] = 1;
    }
  }
});

// Convierte el objeto de frecuencias en un array de objetos
const edadesArray = Object.keys(edadesFrecuencia).map((edad) => ({
  edad: parseInt(edad),
  frecuencia: edadesFrecuencia[edad],
}));

// Ordena el array por edades (opcional)
edadesArray.sort((a, b) => a.edad - b.edad);

// Muestra el resultado
console.log(edadesArray);



// Define el contexto JSON-LD (puedes cambiarlo según tus necesidades)
const context = {
  "@context": {
    "edad": "http://schema.org/age",
    "frecuencia": "http://schema.org/frequency"
  }
};

// Combina el array y el contexto en un objeto JSON-LD
const jsonLdData = { ...context, "@graph": edadesArray };

// Convierte el objeto JSON-LD en una cadena de texto
const jsonLdString = JSON.stringify(jsonLdData, null, 2);

// Especifica el nombre del archivo donde deseas guardar el JSON-LD
const nombreArchivo = 'miArray.jsonld';

// Escribe la cadena JSON-LD en el archivo
fs.writeFileSync(nombreArchivo, jsonLdString);

console.log('El array se ha guardado en el archivo ' + nombreArchivo);
