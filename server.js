const express = require('express');  
const app = express();

app.get('/', (req, res) => {  
    res.send({ message: 'Hello World!' });  
});

app.listen(3141, () => {  
    console.log('Application listening on port 3141!');  
});
