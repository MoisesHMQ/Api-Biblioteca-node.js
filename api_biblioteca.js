const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');


const Livros = [];

app.post('/livros/cadastro', (request, response) => {
    const validar = Livros.find((validacao) => validacao.numeracao == request.body.numeracao)
        if (validar){
            return response.send("Status: leitura já Existe.")}
            
        Livros.push({
            id: uuid.v4(),
            livro: request.body.livro,
            numeracao: request.bory.numeração
        })
        return response.send("Status: Livro Cadastrado")
    })

app.get('/livros', (request, response) => {
    console.log(request.body);
    return response.json(Livros)
})


app.delete('/excluir/livros', (request,response) => {
    const id = Livros.indexOf('id');
    const excluirLivros = Livros.splice(id,1)
            
    return response.send(excluirLivros)
    })

const leitores = [];

app.post('/leitores/cadastrar', (request, response) => {
    const validarleitores = leitores.find((leitor) => leitor.rg == request.body.rg)
        if (validarleitores){
            return response.send("Erro: Rg já Cadstrado.")}

        leitores.push({
        id: uuid.v4(),
        rg: request.body.rg,
        senha: request.body.senha
    })
    return response.send("Status: Leitor cadastrado com sucesso.")
    })

app.post('/login/leitores', (request, response) => {
    const loginleitores = leitores.find((leitura) => leitura.rg == request.body.rg && leitura.senha == request.body.senha)
    if(loginleitores){
        return response.send("status: Seja bem vindo")
    }
    else{
        return response.send("erro: rg ou Senha incorretos")
    }
})

app.get('/listar/leitores', (request, response) => {
    console.log(request.body);
    return response.json(leitores)
})

app.delete('/excluir/leitores', (request,response) => {
    const id = leitores.indexOf('id');
    const excluirleitores = leitores.splice(id,1)
            
    return response.send(excluirleitores)
    })

app.listen(6000, () => {
    console.log('Status: Biblioteca Online...')
    })

