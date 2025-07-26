const express = require('express')
const mongoose = require('mongoose');
//importamos las rutas
require('dotenv').config();
const libroRoutes = require('./routes/routes.libro.js');

const app = express()

const PORT = 3006;

app.set("port",PORT)
app.use(express.json());
app.use("/api/libro", libroRoutes);

mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>console.log("Conectado a la base de datos MongoDB"))
.catch((error) => console.error(error.message));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

// Verbos y endpoints es lo que vamos a trabajar

/* $ node --watch index.js
para levantar el servidor
*/