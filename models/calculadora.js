function somar(numero1, numero2) {
  if (typeof numero1 === "string" || typeof numero2 === "string") return "Erro";
  return numero1 + numero2;
}

exports.somar = somar;
