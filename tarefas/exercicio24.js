let vendas = [3500, 1800, 4200, 3900, 5000, 1200, 2900, 4700];

//Ordenando de forma decrescente
let vendasOrdenadas = vendas.sort((a, b) => b - a);
console.log("Ranking de vendas:");
console.table(vendasOrdenadas);