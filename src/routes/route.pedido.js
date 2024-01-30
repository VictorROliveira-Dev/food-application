import { Router } from "express";
import { db, query } from "../config/database.js";

const routePedido = Router();

routePedido.get("/pedidos", (req, res) => {
  db.all(
    `select id_pedido, nome, total, strftime('%d/%m/%Y', dt_pedido) as dt_pedido from pedido`,
    [],
    (error, results) => {
      if (error) {
        return res
          .status(500)
          .send("Ocorreu um erro ao procurar os pedidos: " + error.message);
      } else {
        return res.status(200).json(results);
      }
    }
  );
});

routePedido.post("/pedidos", (req, res) => {
  //Realizando o método POST:
  let sql = `insert into pedido(id_usuario, nome, email, fone, endereco,
        bairro, cidade, uf, cep, total, dt_pedido) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        returning id_pedido`;
  //Construindo o corpo da requisição:
  //Parâmetros são os valores inseridos no banco.
  let param = req.body;

  db.all(
    sql,
    [
      param.id_usuario,
      param.nome,
      param.email,
      param.fone,
      param.endereco,
      param.bairro,
      param.cidade,
      param.uf,
      param.cep,
      param.total,
    ],
    async (error, results) => {
      if (error) {
        return res
          .status(500)
          .send("Ocorreu um erro ao salvar seu pedido: " + error.message);
      } else {
        //Itens do pedido:
        let id_ped = results[0].id_pedido;

        for (let produto of req.body.itens) {
          sql = `insert into pedido_item(id_pedido, id_produto, qtd, vl_unitario, vl_total)
                values(?, ?, ?, ?, ?)`;
          //Utilizando o query para inserir corretamente o item. (um item só é inserido quando o anterior termina todo o seu processo.)
          await query(sql, [
            id_ped,
            produto.id_produto,
            produto.qtd,
            produto.vl_unitario,
            produto.vl_total,
          ]);
        }

        return res.status(201).json({ id_pedido: id_ped });
      }
    }
  );
});

export default routePedido;
