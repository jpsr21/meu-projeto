import React, { Component } from 'react';
import './App.css';
import Login from './pages/main/Login';

//TELA DE LOGIN
class App extends Component {
  render() {
    return (
      
    

      <div className="App">
          {alert('Partes funcionando: \n\nCadastro, Criar postagem, Mostrar postagens (imagem e descrição) \n\n\nEm breve: Login, Editar postagem, Excluir postagem, Comentários')}
        <Login />
        
       
      </div>
    );
  }
}

export default App;
