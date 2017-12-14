// Async/await

api.get('/users/diego3g').then(function(user) {
  api.get('/repos/' + user.id).then(function(repos) => {
    repos.forEach(function(item, index) {
      console.log('Posição: ' + index + ': ' + item);
    });
  });
});
