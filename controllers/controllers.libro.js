LibrosModel = require('../models/model.libro')

exports.hola = (req, res) => {
    console.log("hola desde el controlador");
    return res.send('Hola desde el controlador libro res.send');
}
//
exports.leerLibro = async (req, res) => {
try {
    const libros = await LibrosModel.find({});
    return res.status(200).json(libros);
} catch (error) {
    console.error("error message: ",error.message, "error status", error.status);
    return res.status(error.status).json(error); 
}
};

exports.crearLibro = async (req, res) => {
    try {
        const libro = req.body
        await LibrosModel.create(libro);
        return res.status(201).json(libro);
    } catch (error) {
        console.error("error message: ", error.message, "error status", error.status);
        return res.status(error.status).json(error);
    }
    }

exports.leerLibroPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const libro = await LibrosModel.findById(id);
        return res.status(200).json(libro);
    } catch (error) {
        console.error("error message: ", error.message, "error status: ", error.status);
        return res.status(error.status).json(error);
    }
}
exports.actualizarLibro = async (req, res) => {
    try { 
        const { id } = req.params;
        const libro = req.body;
        console.log(libro);
        const libroModificado = await LibrosModel.findByIdAndUpdate(id, libro);
        return res.status(200).json(libroModificado);
    } catch (error) {
        console.error("error message: ", error.message, "error status: ", error.status);
        return res.status(error.status).json(error);
    }
}
exports.eliminarLibro = async (req, res) => {
    try {
        const { id } = req.params;
        await LibrosModel.findByIdAndDelete(id);
        return res.status(200).send({ message: "Libro eliminado correctamente" });
    } catch (error) {
        console.error("error message: ", error.message, "error status: ", error.status);
        return res.status(error.status).json(error);
    }
}
// verbo y ruta 