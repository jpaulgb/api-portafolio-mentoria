const {Router} = require("express");
const {hola, leerLibro, crearLibro, leerLibroPorId, actualizarLibro, eliminarLibro } = require('../controllers/controllers.libro.js');
const router = Router();

//creamos la primera ruta
router.get('/hola', hola);
router.get('/', leerLibro);
router.post('/', crearLibro);
router.get('/id/:id', leerLibroPorId)
router.put('/id/:id', actualizarLibro)
router.delete('/id/:id', eliminarLibro)
module.exports = router;

//luego lo importamos en index.js