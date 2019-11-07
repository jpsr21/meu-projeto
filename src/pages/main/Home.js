import React, { Component } from 'react';
//IMPORTAR POPUP PARA CRIAR POST
import Popup from "reactjs-popup";
import CriarPost from "./CriarPost.js";
import CriarComentario from "./CriarComentario.js";
import Opcoes from "./Opcoes.js";
import '../../App.css';
import axios from 'axios';
import api from "../../services/api";


//PAGINA HOME
class Home extends Component {

    state = {
        posts: [],
    }

    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await api.get('http://localhost:3001/api/posts');
        
        this.setState({ posts: response.data });
    };

  
    render() {
        return (
           //this.state.posts.length
            <div className="App">
                
                <div className="barra">InstaClone
                    {/* CRIAR POSTAGEM */}
                    <Popup modal trigger={<i className="fas fa-camera fa-2x cam"></i>}>
                        {close => <CriarPost close={close} />}

                    </Popup>
                </div>
{this.state.posts.map(post => {
    return(
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
                
                                <img key={post.id} src={post.imagem} height="363.5" width="654" />
                                </div>
                           
                        

                        <div className="botoes">
                            <i className="far fa-heart fa-2x margem"></i>
                            {/* COMENTARIO */}
                            <Popup modal trigger={<i className="far fa-comment fa-2x margem"></i>}>
                                {close => <CriarComentario close={close} />}
                            </Popup>

                        </div>
                            <div className="curtidas"><h4>0 curtidas</h4></div>
                            <div className="desc">
                               
                            <h4 key={post._id}>{post.descricao}</h4>
                            
                            </div>

                    </div>

                </div>
                )})}
                <br></br>

            </div>
        );
    }
}

export default Home;