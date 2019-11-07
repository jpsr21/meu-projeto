//var axios = require('axios');

import React, { Component } from 'react';
import '../../App.css';
import firebase from 'firebase';
var axios = require('axios');
axios.get('https://api.github.com/users/codeheaven-io');
//ENVIA O POST CADASTRADO PARA O SERVIDOR

export const firebaseConfig = {
  apiKey: "AIzaSyCoPWgHhCASXqIqHINee0ZUHHkRMv1jGZg",
  authDomain: "imagem-dd539.firebaseapp.com",
  databaseURL: "https://imagem-dd539.firebaseio.com",
  projectId: "imagem-dd539",
  storageBucket: "imagem-dd539.appspot.com",
  messagingSenderId: "623186661127",
  appId: "1:623186661127:web:644235a42dc620f3d5bfa2"
};

export default class CriaPost extends Component {

  constructor(props){
    super(props);
    this.stat = {
      descricao: '',
      imagem: null
    }
  }

   

  criaPost = (descricao, imagem) => {
    axios.post('http://localhost:3001/api/posts', { descricao: descricao, imagem: imagem })
      .then(function (response) {
        console.log('salvo com sucesso')
  
      });
    }  


  fileUploadHandler = () => {

    var file = document.getElementById("files").files[0];
  
    // Inicia o firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    var ref = firebase.storage().ref();
  
    // Cria referencia no firebase storage
    var storageRef = firebase.storage().ref();
    // pega o arquivo pelo DOM
    var file = document.getElementById("files").files[0];
  
    //Cria uma referencia do nome do arquivo
    var thisRef = storageRef.child(file.name);
  
    //Faz o upload e retorna o link do arquivo
    thisRef.put(file).then(snapshot => (snapshot.ref.getDownloadURL().then((s) => this.setState({imagem: s})).then((up) => this.criaPost(this.state.descricao, this.state.imagem)).catch((err) => console.log(err))));
  
  }

  render() {
    return (
      <div className="modal">
        <a className="close" onClick={this.props.close}>
          ×
    </a>
        <div className="header"> Criar Post </div>
        <div className="content">
          {" "}
          {/* FORMULARIO DAS POSTAGEMS */}
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="file" id="files" name="files[]" />
            <br></br><br></br>
            <label>Descrição:</label>
            <input type="text" onChange={(e) => this.setState({descricao: e.target.value})} id="descricao" name="descricao" />
            <input type="submit" onClick={this.fileUploadHandler} value="Enviar" className="en" />
          </form>
        </div>
      </div>
    )
  }

};


