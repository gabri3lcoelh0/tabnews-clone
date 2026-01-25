const calculadora = require("../models/calculadora.js");

test("espera que 3 + 3 seja 6", () => {
  const somar = calculadora.somar(3, 3);
  expect(somar).toBe(6);
});

test("espera que 'banana' + 100 seja Erro", () => {
  const somar = calculadora.somar("banana", 100);
  expect(somar).toBe("Erro");
});
