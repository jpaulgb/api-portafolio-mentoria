Mentoria completa sabado, 26/07/2025

Api de biblioteca con express, rutas, modelos con orm mongoose y
Usar: npm init -y para iniciar el proyecto 

### crear archivos
touch index.js .env .gitignore

### crear carpetas
mkdir controllers routes models

### conectar la base de datos con el proyecto
en el archivo (.env) se agrega la conexión con la base de datos de mongoDb asi:
MONGO_DB_URI = "url_dada_por_mongoDB"

### En .gitignore
ocultar:
node_modules
.env

### para levantar el servidor:
node index.js

URL para probar en postman:
127.0.0.1:3006/api/libro/id/ID

### Usando verbos en postman:
GET (Ver todos los libros)
127.0.0.1:3006/api/libro/

POST (Agregar libros)
127.0.0.1:3006/api/libro/id/"#id"
Estructura:
  {
    "titulo": "1985",
    "autor": "proyecto-default.jpg",
    "imagen": "https://github.com/usuario/proyecto",
    "generos": ["1", "2"]
  }

PUT (Actualizar libros)
127.0.0.1:3006/api/libro/id/"#id"
Estructura:
  {
    "titulo": "1985_1",
    "autor": "proyecto-default_1.jpg",
    "imagen": "https://github.com/usuario/proyecto_1",
    "generos": ["1", "2"]
  }

DELETE (eliminar libros por ID)
127.0.0.1:3006/api/libro/id/"#id"

