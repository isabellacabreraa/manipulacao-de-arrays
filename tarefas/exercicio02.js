let cardapio = [
    "pizza de calabresa",
    "lasanha",
    "sushi",
    "salada Caesar",
    "pastel",
    "yakisoba",
    "feijoada"
  ];

  console.log("Cardápio:");
  console.table(cardapio);

  cardapio.push (`hambúrguer artesanal`, `wrap de frango`);
  console.log(`Cardápio Atualizado`);
  console.table(cardapio);