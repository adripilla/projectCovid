const fs = require('fs');

// Lee el archivo JSON-LD externo
const jsonldData = JSON.parse(fs.readFileSync('datos.jsonld', 'utf8'));

// Crea un objeto para almacenar las sexoes y sus frecuencias
const generoFrecuencia = {};

// Recorre los datos JSON-LD y cuenta las sexoes
jsonldData.forEach((persona) => {
  const sexo = persona.SEXO;
  if (sexo !== undefined) {
    if (generoFrecuencia[sexo]) {
      generoFrecuencia[sexo]++;
    } else {
      generoFrecuencia[sexo] = 1;
    }
  }
});

// Convierte el objeto de frecuencias en un array de objetos
const sexoesArray = Object.keys(generoFrecuencia).map((sexo) => ({
  sexo: parseInt(sexo),
  frecuencia: generoFrecuencia[sexo],
}));

// Ordena el array por sexoes (opcional)
sexoesArray.sort((a, b) => a.sexo - b.sexo);

// Muestra el resultado
console.log(sexoesArray);



// Define el contexto JSON-LD (puedes cambiarlo según tus necesidades)
const context = {
  "@context": {
    "sexo": "http://schema.org/age",
    "frecuencia": "http://schema.org/frequency"
  }
};

// Combina el array y el contexto en un objeto JSON-LD
const jsonLdData = { ...context, "@graph": sexoesArray };

// Convierte el objeto JSON-LD en una cadena de texto
const jsonLdString = JSON.stringify(jsonLdData, null, 2);

// Especifica el nombre del archivo donde deseas guardar el JSON-LD
const nombreArchivo = 'generoArray.jsonld';

// Escribe la cadena JSON-LD en el archivo
fs.writeFileSync(nombreArchivo, jsonLdString);

console.log('El array se ha guardado en el archivo ' + nombreArchivo);
