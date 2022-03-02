const lucas = {
  grossSalary: 2000,
  desconto: 0.1,
  salarioLiquido: 0,
};

function calcularDesconto(grossSalary, desconto) {
  return grossSalary - grossSalary * desconto;
}

lucas.salarioLiquido = calcularDesconto(lucas.grossSalary, lucas.desconto);

console.log(lucas.salarioLiquido);
