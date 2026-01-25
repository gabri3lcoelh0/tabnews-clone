function status(request, response) {
  return response.status(200).json({ chave: "deu tudo certo" });
}

export default status;
