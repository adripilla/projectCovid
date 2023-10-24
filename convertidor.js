


const fs = require('fs');
const csv = require('csv-parser');

const datos = [];
let lineasProcesadas = 0;
const limiteLineas = 1000; // Cambia este valor para ajustar la cantidad de líneas que deseas procesar.

fs.createReadStream('COVID19MEXICO.csv')
  .pipe(csv())
  .on('data', (row) => {
    if (lineasProcesadas < limiteLineas) {
      // Mapea los datos del CSV a objetos JSON.
      datos.push({
        "@context": "http://schema.org/", // Contexto JSON-LD (puedes personalizarlo)
      "@type": "Persona", // Tipo de entidad (puedes personalizarlo)
      "FECHA_ACTUALIZACION": row.FECHA_ACTUALIZACION,
      "ID_REGISTRO": row.ID_REGISTRO,
      "ORIGEN": parseInt(row.ORIGEN),
      "SECTOR": parseInt(row.SECTOR),
      "ENTIDAD_UM": row.ENTIDAD_UM,
      "SEXO": parseInt(row.SEXO),
      "ENTIDAD_NAC": row.ENTIDAD_NAC,
      "ENTIDAD_RES": row.ENTIDAD_RES,
      "MUNICIPIO_RES": row.MUNICIPIO_RES,
      "TIPO_PACIENTE": parseInt(row.TIPO_PACIENTE),
      "FECHA_INGRESO": row.FECHA_INGRESO,
      "FECHA_SINTOMAS": row.FECHA_SINTOMAS,
      "FECHA_DEF": row.FECHA_DEF,
      "INTUBADO": parseInt(row.INTUBADO),
      "NEUMONIA": parseInt(row.NEUMONIA),
      "EDAD": parseInt(row.EDAD),
      "NACIONALIDAD": parseInt(row.NACIONALIDAD),
      "EMBARAZO": parseInt(row.EMBARAZO),
      "HABLA_LENGUA_INDIG": parseInt(row.HABLA_LENGUA_INDIG),
      "INDIGENA": parseInt(row.INDIGENA),
      "DIABETES": parseInt(row.DIABETES),
      "EPOC": parseInt(row.EPOC),
      "ASMA": parseInt(row.ASMA),
      "INMUSUPR": parseInt(row.INMUSUPR),
      "HIPERTENSION": parseInt(row.HIPERTENSION),
      "OTRA_COM": parseInt(row.OTRA_COM),
      "CARDIOVASCULAR": parseInt(row.CARDIOVASCULAR),
      "OBESIDAD": parseInt(row.OBESIDAD),
      "RENAL_CRONICA": parseInt(row.RENAL_CRONICA),
      "TABAQUISMO": parseInt(row.TABAQUISMO),
      "OTRO_CASO": parseInt(row.OTRO_CASO),
      "TOMA_MUESTRA_LAB": parseInt(row.TOMA_MUESTRA_LAB),
      "RESULTADO_LAB": parseInt(row.RESULTADO_LAB),
      "TOMA_MUESTRA_ANTIGENO": parseInt(row.TOMA_MUESTRA_ANTIGENO),
      "RESULTADO_ANTIGENO": parseInt(row.RESULTADO_ANTIGENO),
      "CLASIFICACION_FINAL": parseInt(row.CLASIFICACION_FINAL),
      "MIGRANTE": parseInt(row.MIGRANTE),
      "PAIS_NACIONALIDAD": row.PAIS_NACIONALIDAD,
      "PAIS_ORIGEN": row.PAIS_ORIGEN,
      "UCI": parseInt(row.UCI)
      });
      lineasProcesadas++;
    } 
  })
  .on('end', () => {
    // Convierte los datos a formato JSON-LD
    const jsonLdData = JSON.stringify(datos, null, 2);

    // Guarda el archivo JSON-LD
    fs.writeFileSync('datos.jsonld', jsonLdData);
    console.log('Archivo JSON-LD generado.');
  });
