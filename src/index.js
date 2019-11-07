import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Cadastro from './pages/main/Cadastro';
import Home from './pages/main/Home';
import Login from './pages/main/Login';
import './index.css';

//importação das rotas
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  //páginas da aplicação
  <BrowserRouter>
    <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/pages/main/cadastro" component={Cadastro} />
            <Route path="/pages/main/home" component={Home} />
            <Route path="/pages/main/login" component={Login} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root')
  
);
