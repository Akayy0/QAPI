const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const usuariosRoutes = require('./routes/usuarios');

// Adicione o middleware CORS
app.use(cors());

app.use(express.json());
app.use('/usuarios', usuariosRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});