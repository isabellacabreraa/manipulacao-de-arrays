let filaAtendimento = [
  "cliente 003",
  "cliente 004",
  "cliente 005",
  "cliente 006",
  "cliente 007"
];

console.log("Clientes:");
console.table(filaAtendimento);

//Adicionando itens no início do array
filaAtendimento.unshift("clienteVip1", "clienteVip2");
console.log("Lista de clientes alterada:");
console.table(filaAtendimento);