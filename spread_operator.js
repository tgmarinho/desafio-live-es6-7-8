// Spread

const dados = {
  empresa: 'rocketseat',
  endereco: {
    rua: 'Al. Bela Aliança', num: '775',
  },
};

const user1 = {
    nome : 'Diego',
   ...dados,
};

const user2 = {
    nome : 'Robson', 
    ...dados
};

console.log(user1);
console.log(user2);




