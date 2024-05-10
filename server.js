const app = require("./src/app.js");
const connection = require("./src/db/conn.js");

const PORT = 8080;

// Iniciando o servidor Express na porta especificada
app.listen(PORT, async () => {
  console.log(`API está sendo executada na porta ${PORT}`);
  
  // Verificando a conexão com o banco de dados
  try {
    const [result] = await connection.execute("SELECT 1");
    if (result) {
      console.log("MySQL connection OK");
    }
  } catch (error) {
    console.error('Erro ao conectar ao MySQL:', error);
  }
});