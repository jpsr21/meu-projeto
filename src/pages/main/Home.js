import React, { Component } from 'react';
//IMPORTAR POPUP PARA CRIAR POST
import Popup from "reactjs-popup";
import CriarPost from "./CriarPost.js";
import CriarComentario from "./CriarComentario.js";
import Opcoes from "./Opcoes.js";
import '../../App.css';
import axios from 'axios';

//PAGINA HOME
class Home extends Component {
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {
        axios.post('');
    }

 render() {
 return (
    <div className="App">
        <div className="barra">InstaClone
        {/* CRIAR POSTAGEM */}
        <Popup modal trigger={<i className="fas fa-camera fa-2x cam"></i>}>
        {close => <CriarPost fileSelector={this.fileSelectedHandler.bind(this)} close={close} />}
       
      </Popup>
       
        
        </div>
                     
       {/* POSTAGEM */}
       <div className="square">
        <div className="block">
        
            <div className="nome">
                <h3>Nome</h3>
            </div>
            {/* OPÇÕES */}
            <div className="opc">                
                <Popup modal trigger={<i className="fas fa-ellipsis-h fa-2x"></i>}>
                {close => <Opcoes close={close} />}       
                </Popup>
            </div>
            <div className="quadro">
            
            </div>        
            
            <div className="botoes">
                <i className="far fa-heart fa-2x margem"></i>
                {/* COMENTARIO */}
                <Popup modal trigger={<i className="far fa-comment fa-2x margem"></i>}>
                {close => <CriarComentario close={close} />}       
                </Popup>
                        
            </div>
            <div className="curtidas"><h4>0 curtidas</h4></div>
            <div className="desc"><h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies tempus venenatis. Donec condimentum consectetur magna. Vivamus malesuada vitae tellus id ultricies. Aenean rhoncus luctus velit, convallis imperdiet turpis congue at. Nulla facilisi. Nullam non condimentum leo, ut sagittis turpis. Proin vulputate nisi nec ipsum tempus egestas. Curabitur lobortis orci sollicitudin nulla interdum aliquam. Curabitur nec interdum massa. Vestibulum posuere, eros at ornare euismod, nibh neque feugiat dolor, sed fermentum orci est in nulla. Aliquam urna nisi, suscipit at viverra et, pretium et magna.</h4></div>
        
        </div>
    
        </div>
    <br></br>
    
    </div>
 );
 }
}

export default Home;