let menuNavegacao = [
  "Início",
  "Serviços",
  "Portfólio",
  "Blog",
  "Contato",
  "Login",
  "Área do cliente"
];

console.log("Menu navegação:");
console.table(menuNavegacao);

let removeItem = menuNavegacao.splice(1, 2);
console.log("Menu navegação atualizado:");
console.table(menuNavegacao);