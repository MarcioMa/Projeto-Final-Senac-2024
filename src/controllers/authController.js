// Importe o banco de dados ou o pool de conexão, se necessário
const connection = require('../db/conn');

// Função para registrar um novo usuário
async function registerUser(req, res) {
  const { nome, sobrenome, email, ddd, telefone, senha, ativo } = req.body;

  try {
    const conn = await connection;
    const [result] = await conn.execute('INSERT INTO usuarios (nome, sobrenome, email, ddd, telefone, senha, ativo) VALUES (?, ?, ?, ?, ?, ?, ?)', [nome, sobrenome, email, ddd, telefone, senha, ativo]);
  
  //await conn.end();

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

// Função para autenticar um usuário
async function loginUser(req, res) {
  const { email, senha } = req.body;

  try {
    const conn = await connection;
    const [rows] = await conn.execute('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);

   // await conn.end();
    if ([rows].length === 1) {
      res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ error: 'Email ou senha incorretos' });
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

module.exports = { registerUser, loginUser};
