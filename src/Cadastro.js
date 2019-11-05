import React, { Component } from 'react';
import './App.css';

//TELA DE CADASTRO
class Cadastro extends Component {
 render() {
 return (
    <div className="App">
       <div className="barra">InstaClone</div>
        
        <div className="container">
  <form action="">
  <div className="row">
      <div className="col-25">
        <label>Nome:</label>
      </div>
      <div className="col-75">
        <input type="text" id="nome" name="nome" placeholder="Nome" />
    </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-25">
        <label>Email:</label>
      </div>
      <div className="col-75">
        <input type="text" id="email" name="email" placeholder="Email" />
    </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-25">
        <label>Senha:</label>
      </div>
      <div className="col-75">
        <input type="password" id="senha" name="senha" placeholder="Senha" />
      </div>
    </div>
    <br/>
    <div className="row">
      
      <input type="submit" className="enviar" value="CADASTRAR" />
    </div>
  </form>
</div> 
    </div>
 );
 }
}
export default Cadastro;