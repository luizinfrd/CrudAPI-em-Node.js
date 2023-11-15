const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const prodController = require('./controller/prodController');

mongoose.connect('mongodb://localhost:27017/mytaksdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());

app.listen(PORT, () => {
    console.log('Servidor rodando na porta', PORT);
});

app.get('/prod', prodController.obterProdutos)

app.post('/prod', prodController.adicionarProdutos)

app.put('/prod/:id', prodController.atualizarProdutos)

app.delete('/prod/:id', prodController.excluirProdutos)
