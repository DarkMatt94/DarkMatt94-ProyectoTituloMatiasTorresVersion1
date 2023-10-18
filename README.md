# DarkMatt94-ProyectoTituloMatiasTorresVersion1

---------------
Instrucciones para Iniciar el Proyecto
1. Descargar los Archivos
Asegúrate de descargar todos los archivos del proyecto en tu máquina local.

2. Requisitos Previos
Antes de comenzar, asegúrate de tener XAMPP instalado en tu sistema. Necesitarás XAMPP para la gestión de MySQL.

4. Base de Datos MySQL
La carpeta "mysql" contiene todos los archivos necesarios para la base de datos. Asegúrate de importar estos archivos en tu servidor MySQL utilizando phpMyAdmin o una herramienta similar. Sin esta base de datos, el proyecto no funcionará correctamente.

5. Instalación de Dependencias
Dentro de las carpetas "server" y "frontEnd", ejecuta el siguiente comando en la terminal para instalar las dependencias necesarias:

cd server
npm install

cd frontEnd
npm install

5. Configurar la API Key
En el archivo "server.js" dentro de la carpeta "server", asegúrate de modificar la apiKey con tu propia clave personal. Esta clave es esencial para el funcionamiento del proyecto.

6. Iniciar el Servidor Backend
Para iniciar el servidor backend, ejecuta el siguiente comando en la carpeta del proyecto:

cd server
npm start

Asegúrate de que la base de datos esté creada y que XAMPP esté en funcionamiento, ya que el servidor backend depende de la base de datos.

7. Iniciar el Frontend
Para iniciar el servidor de desarrollo del frontend, ejecuta el siguiente comando en la carpeta del proyecto:

cd frontEnd
npm run dev
