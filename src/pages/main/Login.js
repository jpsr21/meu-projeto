import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

//TELA DE LOGIN
class Login extends Component {
 render() {
 return (
    <div className="App">
       <div className="barra">InstaClone</div>
        
        <div className="container">
  <form action="">
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
      
      <input type="submit" className="enviar" value="ENTRAR" />
    </div>
  </form>
  <Link to="/pages/main/Cadastro">Cadastrar-se</Link>
  <br></br>
  <Link to="/pages/main/Home">IR PARA HOME</Link>
</div> 
    </div>
 );
 }
}
export default Login;