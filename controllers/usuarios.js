const { response, request } = require('express');
const body = request.body;
const Usuarios = require('../models/usuarios');


const usuariosGet = async (req, res = response) => {
    res.json({
        msg: 'get API-Controller',
    })
};

const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'put API-Controller'
    })
};

const usuariosPost = async (req, res = response) => {
    const usuario = new Usuarios(req.body);
    const {body} = req.body;
    await usuario.save();
    res.json({
        msg: 'post API-Controller',
        usuario
    })
};

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API-Controller'
    })
};

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API-Controller'
    })
};

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
};