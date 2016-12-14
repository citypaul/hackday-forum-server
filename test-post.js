const axios = require('axios');
console.log(axios.post);
axios.put('http://localhost:8000/topic/football-data', {
    threadMessage: 'I would like to build feature x y z',

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });