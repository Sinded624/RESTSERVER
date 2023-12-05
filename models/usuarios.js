const { Schema, model } = require("mongoose");

const UsuariosSchema = Schema({
    name:{
        type: String,
        required:[true, 'el nombre es obligatorio']
    },
    email:{
        type: String,
        required:[true, 'el correo el obligatorio'],
        unique:true
    },
    password:{
        type: String,
        required:[true, 'la contraseña es obligatoria']
    },
    image:{
        type: String,
    },
    role:{
        type: String,
        required:true,
        emun:['ADMIN_ROLE','USER_ROLE']
    },
    estate:{
        type: Boolean,
        default:true
    },
    google:{
        type: Boolean,
        default:false
    }
});
module.exports = model('Usuarios', UsuariosSchema);