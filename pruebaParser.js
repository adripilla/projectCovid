const JsonLdParser = require("jsonld-streaming-parser").JsonLdParser;

const myParser = new JsonLdParser();


const fs = require('fs');

// Nombre del archivo JSON-LD que deseas leer.
const nombreArchivo = 'informacion.jsonld';

// Lee el contenido del archivo de forma síncrona (ten cuidado con esto en aplicaciones en producción).
try {
  const contenido = fs.readFileSync(nombreArchivo, 'utf8');

  // Analiza el contenido como un objeto JSON-LD.
  const objetoJSONLD = JSON.parse(contenido);

  // Ahora puedes trabajar con el objeto JSON-LD.
  console.log(objetoJSONLD);
} catch (error) {
  console.error('Error al leer el archivo:', error);
}

/*
try {
  const contenido = fs.readFileSync(nombreArchivo, 'utf8');

  const datos = JSON.parse(contenido);

  let personaConPromedioMayor = null;
  let promedioMayor = -Infinity;

  for (const persona of datos) {
    const promedio = persona.promedio;
    
    if (promedio > promedioMayor) {
      promedioMayor = promedio;
      personaConPromedioMayor = persona;
    }
  }

  if (personaConPromedioMayor) {
    console.log(`La persona con el promedio mayor es: ${personaConPromedioMayor.nombre} (Promedio: ${promedioMayor})`);
  } else {
    console.log('No se encontraron personas en el archivo.');
  }
} catch (error) {
  console.error('Error al leer o analizar el archivo:', error);
}




/*
myParser
  .on('data', console.log)
  .on('error', console.error)
  .on('end', () => console.log('All triples were parsed!'));

myParser.write('{');
myParser.write(`"@context": "https://schema.org/",`);
myParser.write(`"@type": "Recipe",`);
myParser.write(`"name": "Grandma's Holiday Apple Pie",`);
myParser.write(`"aggregateRating": {`);
myParser.write(`"@type": "AggregateRating",`);
myParser.write(`"ratingValue": "4"`);
myParser.write(`}}`);
myParser.end();

*/