// Async/await

// api.get('/users/diego3g').then(function(user) {
//   api.get('/repos/' + user.id).then(function(repos) => {
//     repos.forEach(function(item, index) {
//       console.log('Posição: ' + index + ': ' + item);
//     });
//   });
// });


//ES>=8

// arrow functions
const buscaUsuarioEEndereco = async () => {

    try{
        const user = await api.get('/users/diego3g');
        const enderecos = await api.get(`/repos/enderecos/${user.id}`)
    }catch(err){
        throw new Error(`Não foi possível buscar os dados. Motivo: ${err}`);;
    }
};



