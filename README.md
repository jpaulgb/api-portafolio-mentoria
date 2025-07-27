Mentoria completa sabado, 26/07/2025

Api de biblioteca con express, rutas, modelos con orm mongoose y
Usar:
```
npm init -y para iniciar el proyecto
```
<br/>

### Crear archivos
```
touch index.js .env .gitignore
```

Para ver carpetas y carpetas ocultas en git bash:
```
ls -a
```
### Crear carpetas
```
mkdir controllers routes models
```
<br/>

### Express
npm install express

### Conectar la base de datos con el proyecto
En el archivo (.env) se agrega la conexión con la base de datos de mongoDb asi:
```
MONGO_DB_URI = "url_dada_por_mongoDB"
```
<br/>

### En .gitignore
Ocultar:

```
node_modules 
.env
```
<br/>

### Para levantar el servidor:
```
node index.js
```
Para levantar el servidor con watch:
```
node --watch index.js
```
<br/>

URL para probar en postman:
```
127.0.0.1:3006/api/libro/id/ID
```

### Usando VERBOS en postman para probar:
GET (Ver todos los libros) <br/>
127.0.0.1:3006/api/libro/
<br/>

POST (Agregar libros) <br/>
Seleccionar opción: Body, raw y JSON
127.0.0.1:3006/api/libro/id/"#id"
Estructura:
```
  {
    "titulo": "1985",
    "autor": "proyecto-default.jpg",
    "imagen": "https://github.com/usuario/proyecto",
    "generos": ["1", "2"]
  }
```
<br/>

PUT (Actualizar libros) <br/>
127.0.0.1:3006/api/libro/id/"#id"
Estructura: <br/>
```
  { 
    "titulo": "1985_1",
    "autor": "proyecto-default_1.jpg",
    "imagen": "https://github.com/usuario/proyecto_1",
    "generos": ["3", "4"]
  }
```
<br/>

DELETE (eliminar libros por ID) <br/>
127.0.0.1:3006/api/libro/id/"#id"

Fork: https://github.com/jpaulgb/api-portafolio-1
de la clase: https://github.com/JSand89/api-portafolio
