
let mensagens = [
  "Propaganda indevida",
  "Bom dia, posso ajudar?",
  "Preciso de suporte técnico",
  "Claro, qual o problema?",
  "Erro ao acessar conta"
];
console.log("Mensagens:");
console.table(mensagens);

//Removendo o primeiro item da lista
let removePrimeiraMensagem = mensagens.shift();
console.log("Lista de mensagens alterada:");
console.table(mensagens);