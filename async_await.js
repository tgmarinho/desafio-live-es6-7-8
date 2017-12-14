// Async/await

// arrow functions
const buscaUsuarioEEnderecoArrowFunction = async () => {

    try{
        const user = await api.get('/users/diego3g');
        const enderecos = await api.get(`/repos/enderecos/${user.id}`);
    } catch(err) {
        console.log(err);
    }
};


// Função normal
// async function buscaUsuarioEEnderecoFunction() {

//     try{
//         const user = await api.get('/users/diego3g');
//         const enderecos = await api.get(`/repos/enderecos/${user.id}`);
//     } catch(err){
//         console.log(err);
//     }
// }



