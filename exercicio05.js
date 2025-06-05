let importados = [
  "carregador portátil",
  "cabo HDMI",
  "leitor biométrico",
  "controle sem fio",
  "webcam 4K"
];

console.log("Produtos Importados:");
console.table(importados);

//Removendo o primeiro item da lista
let removePrimeiroProduto = importados.shift();
console.log("Lista de produtos importados alterada:");
console.table(importados);