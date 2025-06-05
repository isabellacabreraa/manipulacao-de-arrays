let chamada = [
  "Carlos",
  "Fernanda",
  "João",
  "Mariana",
  "Lucas",
  "Camila"
];

console.log("Chamada:");
console.table(chamada);

//Adicionando itens no início do array
chamada.unshift("Beatriz", "Rafaela");
console.log(`Lista de chamada alterada:`);
console.table(chamada);