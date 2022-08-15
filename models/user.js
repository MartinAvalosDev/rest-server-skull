const { Schema, model } = require ('mongoose');

const userSchema = Schema({
    nombre: {
        type: 'string',
        required: [true,'El nombre es obligatorio']
    },
    mail: {
        type: 'string',
        required: [true,'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: 'string',
        required: [true,'La contraseña es obligatoria']
    },
    img: {
        type: 'string'
    },
    rol: {
        type: 'string',
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
})

module.exports = model('User', userSchema);  