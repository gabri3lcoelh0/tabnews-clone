import database from "infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1+1 AS soma");
  console.log("Resultado da consulta:", result.rows[0]);
  return response.status(200).json({ chave: "são acima da média." });
}

export default status;
