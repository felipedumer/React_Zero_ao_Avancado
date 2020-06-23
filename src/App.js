import React, {Component} from 'react';
import firebase from "./fireConnection";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: ''
        };

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(e) {

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .then(() => {
                alert('Cdastrado com sucesso');
            })
            .catch((err) => {
                if(err.code === 'auth/invalid-email') {
                    alert('Email invalido')
                } else {
                if(err.code === 'auth/weak-password') {
                    alert('Senha fraca')
                }
                else {
                    alert('Codigo' + err.code);
                }}
            })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.cadastrar}>
                    <lavel>Email:</lavel><br/>
                    <input type={"text"} value={this.state.email}
                           onChange={(e) => this.setState({email: e.target.value})}/>
                    <br/><label>Senha:</label><br/>
                    <input type={"text"} value={this.state.senha}
                           onChange={(e) => this.setState({senha: e.target.value})}/>
                    <br/><button type={"submit"}>Cadastrar</button>
                </form>
            </div>
        );
    }
}
