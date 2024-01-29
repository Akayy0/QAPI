const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rotas para operações CRUD em usuários

// Obtém todos os usuários
router.get('/', usuariosController.obterTodosUsuarios);

// Obtém um usuário pelo ID
router.get('/:id', usuariosController.obterUsuarioPorId);

// Adiciona um novo usuário
router.post('/', usuariosController.adicionarUsuario);

// Atualiza um usuário existente
router.put('/:id', usuariosController.atualizarUsuario);

// Exclui um usuário
router.delete('/:id', usuariosController.excluirUsuario);

module.exports = router;