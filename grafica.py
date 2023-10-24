import json
import matplotlib.pyplot as plt
import subprocess

# Cargar datos desde un archivo JSON externo
with open('miArray.jsonld', 'r') as file:
    jsonld_data = json.load(file)

# Extraer datos de edad y frecuencia
edades = [item["edad"] for item in jsonld_data["@graph"]]
frecuencias = [item["frecuencia"] for item in jsonld_data["@graph"]]

# Crear la gráfica
plt.figure(figsize=(10, 6))
plt.plot(edades, frecuencias, marker='o', linestyle='-')
plt.title('Frecuencia por Edad del covid')
plt.xlabel('Edad')
plt.ylabel('Frecuencia')
plt.grid(True)

# Mostrar la gráfica
plt.show()

