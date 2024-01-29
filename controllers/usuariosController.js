const Usuario = require('../models/usuarioModel');

// Simulando um banco de dados em memória
let usuarios = [
  new Usuario(1, 'João'),
  new Usuario(2, 'Maria'),
];

// Controladores para operações CRUD em usuários

// Obtém todos os usuários
exports.obterTodosUsuarios = (req, res) => {
  console.log('Endpoint: Obter Todos os Usuários');
  res.json(usuarios);
};

// Obtém um usuário pelo ID
exports.obterUsuarioPorId = (req, res) => {
  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  console.log(`Endpoint: Obter Usuário por ID (${req.params.id})`);

  if (!usuario) {
    console.log('Usuário não encontrado');
    return res.status(404).send('Usuário não encontrado');
  }

  console.log('Usuário encontrado:', usuario);
  res.json(usuario);
};

// Adiciona um novo usuário
exports.adicionarUsuario = (req, res) => {
  console.log('Endpoint: Adicionar Usuário');
  console.log('Corpo da Solicitação:', req.body);

  const novoUsuario = new Usuario(usuarios.length + 1, req.body.nome);
  usuarios.push(novoUsuario);
  console.log('Novo Usuário adicionado:', novoUsuario);

  res.json(novoUsuario);
};

// Atualiza um usuário existente
exports.atualizarUsuario = (req, res) => {
  console.log(`Endpoint: Atualizar Usuário por ID (${req.params.id})`);
  console.log('Corpo da Solicitação:', req.body);

  const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
  if (!usuario) {
    console.log('Usuário não encontrado');
    return res.status(404).send('Usuário não encontrado');
  }

  usuario.nome = req.body.nome;
  console.log('Usuário atualizado:', usuario);

  res.json(usuario);
};

// Exclui um usuário
exports.excluirUsuario = (req, res) => {
  console.log(`Endpoint: Excluir Usuário por ID (${req.params.id})`);

  usuarios = usuarios.filter(u => u.id !== parseInt(req.params.id));
  console.log('Usuário excluído com sucesso');

  res.send('Usuário excluído com sucesso');
};