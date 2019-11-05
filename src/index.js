import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cadastro from './Cadastro';
import Home from './Home';
import './index.css';

//importação das rotas
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  //páginas da aplicação
  <BrowserRouter>
  <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/home" component={Home} />
        </Switch>
  </BrowserRouter>
  , document.getElementById('root')
  
);
