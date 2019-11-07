//  import React, { Component } from 'react';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import Home from './Home';
import '../../App.css';
var axios = require('axios');
axios.get('https://api.github.com/users/codeheaven-io');

//TELA DE CADASTRO
function Cadastro(props) {
 
  //ENVIA O USUARIO CADASTRADO PARA O SERVIDOR
  const [email, setEmail] = useState();
  const [nome, setNome] = useState();
  const [senha, setSenha] = useState();

  const cadastrarUser = (nome, email, senha) => {
    axios.post('http://localhost:3001/api/users', { nome: nome, email: email, senha: senha })
  .then(function(response){
    console.log('salvo com sucesso')
    //REDIRECIONA O USUÁRIO PARA A HOME
    props.history.push("Home");
    
  }); 
  
  }

 return (
  
    <div className="App">
       <div className="barra">InstaClone</div>
        <div className="container">
  <form onSubmit={(e) => e.preventDefault()}>
  <div className="row">
      <div className="col-25">
        <label>Nome:</label>
      </div>
      <div className="col-75">
        <input type="text" onChange={(e) => setNome(e.target.value)} name="nome" value={nome} placeholder="Nome" required />
    </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-25">
        <label>Email:</label>
      </div>
      <div className="col-75">
        <input type="text" onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder="Email" required />
    </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-25">
        <label>Senha:</label>
      </div>
      <div className="col-75">
        <input type="password" onChange={(e) => setSenha(e.target.value)} name="senha" value={senha} placeholder="Senha" required />
      </div>
    </div>
    <br/>
    <div className="row">
      
      <input type="submit" onClick={() => cadastrarUser(email, nome, senha)} className="enviar" value="CADASTRAR" />
    </div>
  </form>
</div> 
    </div>
 );
 
}
export default Cadastro;