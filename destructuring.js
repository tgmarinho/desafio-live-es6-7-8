// Desestruturação

const user = {
  nome: 'Diego Fernandes',
  empresa: 'RocketSeat',
  endereco: {
    rua: 'Al. Bela Aliança',
    num: '775',
    cidade: 'Rio do Sul',
  }
};



// Destructuring
const { nome, empresa, endereco : { rua, num, cidade } } = user;

console.log(nome);
console.log(empresa);
console.log(rua);
console.log(num);
console.log(cidade);





