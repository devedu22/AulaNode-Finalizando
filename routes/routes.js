const express = require('express')
const PessoasController = require('../controllers/PessoasController')
const routes = express.Router()

routes.get('/', PessoasController.index)
routes.get('/cadastro', PessoasController.cadastro)

routes.get('/buscarCep', PessoasController.buscarCep)

routes.post('/cadastro', PessoasController.salvar)

module.exports = routes