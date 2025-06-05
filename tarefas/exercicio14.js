let artigosBlog = [
  "Como usar Docker com Node.js",
  "5 erros comuns em JavaScript",
  "Introdução ao TypeScript",
  "Clean Code na prática",
  "Design Patterns úteis",
  "Refatoração de código",
  "Boas práticas de API REST",
  "Segurança em aplicações web"
];

console.log("Artigos:");
console.table(artigosBlog);

console.log(`Apenas 4 artigos mais recentes:`);
console.table(artigosBlog.slice(0, 4));