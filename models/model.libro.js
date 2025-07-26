const mongoose = require("mongoose")
const Schema = mongoose.Schema
const LibrosSchema = new Schema({
    titulo : {
        type : String,
        required:true,
        maxLength:100
    },
    autor : {
        type: String,
        required : true,
        maxLength: 100        
    },
        imagen : {
        type: String,
        required : true,
        maxLength: 100
    },
    generos : {
        type:[String]
    },
    resena : {
        type: String,
        maxLength: 500   
    }
})

module.exports = mongoose.model("Libros170",LibrosSchema)