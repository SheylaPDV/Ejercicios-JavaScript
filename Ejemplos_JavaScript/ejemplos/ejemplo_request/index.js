'use strict';

const axios = require('axios');

const url = 'https://swapi.dev/api/people1';

axios.get(url).then(response => {
    console.log(response.data);
}).catch( err => {
    console.log('error en la peticion:', err.message)
})

