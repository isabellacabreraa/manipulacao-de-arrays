let diasFaltas = [
  "Carlos - Segunda",
  "Carlos - Terça",
  "Carlos - Quarta",
  "Carlos - Quinta",
  "Carlos - Sexta",
  "Carlos - Segunda (semana 2)",
  "Carlos - Terça (semana 2)",
  "Carlos - Quarta (semana 2)"
];

console.log("Férias:");
console.table(diasFaltas);

console.log(`Relatório da primeira semana:`);
console.table(diasFaltas.slice(0, 5));