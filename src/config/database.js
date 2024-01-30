import sqlite3 from "sqlite3";

//Conectando o sqlite3 com o nosso banco de dados
const SQLite3 = sqlite3.verbose();

//Estrutura para rodar e tratar as querys aguardando as requisições necessárias: (promisse)
function query(command, params, method = "all") {
  return new Promise((resolve, reject) => {
    db[method](command, params, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}

const db = new SQLite3.Database("banco.db", SQLite3.OPEN_READWRITE, (error) => {
  if (error) {
    return console.log("Erro ao conectar com o banco: " + error.message);
  }
});

export { db, query };
