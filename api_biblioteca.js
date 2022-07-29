const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');


app.post('/livros/cadastro', (request, response) => {
    const validar = pacientes.find((validacao) => validacao.numeração_do_livro == request.body.numeração_do_livro)
        if (validar){
            return response.send("Status: Paciente já Existe.")}
            
        pacientes.push({
            id: uuid.v4(),
            livro: request.body.livro,
            numeracao: request.bory.numeração
        })
        return response.send("Status: Livro Cadastrado")
    })

