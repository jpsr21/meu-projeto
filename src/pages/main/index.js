import React, { Component } from 'react';
import api from "../../services/api";

export default class Main extends Component {
    state = {
        users: [],
    }

    componentDidMount() {
        this.loadUsers();
    }

    loadUsers = async () => {
        const response = await api.get('http://localhost:3001/api/users');
        
        this.setState({ users: response.data });
    };

    render() {
        return(
            <div className="user-list">
                {this.state.users.map(user => (
                    <h2 key={user._id}>{user.nome}</h2>
                ))}
            </div>
        )
    }
}