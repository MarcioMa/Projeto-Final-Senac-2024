const conn = require("../db/conn");

const insert = async (user) => {
  try {
    const result = await conn.execute(
      `INSERT INTO usuarios (nome, sobrenome, email, telefone, senha, ativo) VALUES (?, ?, ?, ?, ?, ?)`,
      [user.nome, user.sobrenome, user.email, user.telefone, user.senha, user.ativo]
    );

    return result; 

  } catch (error) {
    console.error(error);
    throw error;
  }
}

const select = async () => {
    try {
      const result = await conn.execute(
        `SELECT * FROM usuarios`
      );
      return result; 
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const delet = async (id) => {
    Number(id);
    
    try {
      const result = await conn.execute(
        `DELETE FROM usuarios WHERE id = ?`,[id]
      );
      return result; 
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const update = async (id, user) => {
    Number(id)

    try {
      const result = await conn.execute(
        `UPDATE usuarios SET email = ?, telefone = ?, senha = ? WHERE id = ?`,[user.email, user.telefone, user.senha, id]
      );

      return result;

    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  module.exports = {
    insert,
    select,
    delet,
    update,
  };