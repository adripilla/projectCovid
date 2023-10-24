import tkinter as tk
import subprocess

def ejecutar_script():
    subprocess.call(['python', 'grafica.py'])

def ejecutar_script2():
    subprocess.call(['python', 'graficaGenero.py'])

# Crear una ventana
ventana = tk.Tk()
ventana.title("Menú de Inicio")

# Obtener el tamaño de la pantalla
ancho_pantalla = ventana.winfo_screenwidth()
alto_pantalla = ventana.winfo_screenheight()

# Calcular las coordenadas para el centro de la pantalla
x = (ancho_pantalla - ventana.winfo_reqwidth()) // 2
y = (alto_pantalla - ventana.winfo_reqheight()) // 2

# Establecer la posición de la ventana en el centro
ventana.geometry("+{}+{}".format(x, y))

ventana.configure(bg="#000000")  # Puedes cambiar "lightblue" por el color que desees


titulo_label = tk.Label(ventana, text="COVID-19 en México", font=("Helvetica", 16),fg="white")
titulo_label.pack(pady=20)
titulo_label.configure(bg="#000000")

# Crear un botón para ejecutar el otro archivo
boton_ejecutar = tk.Button(ventana, text="Edades", command=ejecutar_script)
boton_ejecutar.pack(pady=20)

boton_ejecutar2 = tk.Button(ventana, text="Genero", command=ejecutar_script2)
boton_ejecutar2.pack(pady=20)

# Iniciar el bucle principal de la GUI
ventana.mainloop()
