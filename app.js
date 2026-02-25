const express = require('express');
const app =  express();

const PORT  = 3000;
app.get('/', (req, res) => {
    res.send('Heloo Word');
});

app.listen(PORT, ()=>{
    console.log('Nuestra app esta funcionando')
});