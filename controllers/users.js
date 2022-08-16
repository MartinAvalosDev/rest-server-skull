const { response, request } = require('express');
const Usuario = require('../models/user')
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usuariosPost = async (req, res = response) => {

    const errors = validationResult(req)
    if ( !errors.isEmpty() ){
        return res.status(400).json( errors
    )}

    const {nombre, mail, password, rol} = req.body;
    const usuario = new Usuario({nombre, mail, password, rol});

    //Verificar si el mail ya existe
    const exists = await Usuario.findOne({ mail })
    if (exists){
        return res.status(400).json({
            msg: 'Ese mail ya está registrado'
        })
    }

    //Encriptacion de contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);

    //Inserto registro de usuario en la base de datos
    await usuario.save();


    res.json({
        msg: 'Usuario guardado en la base de datos',
        usuario
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}