import React, {Component} from 'react';
import firebase from "./fireConnection";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: ''
        };

        this.logar = this.logar.bind(this);
        // deslogar
        //firebase.auth().signOut();

        // verificar se houve alteração no stats
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                alert('usuario logado com sucesso)');
            }
        });
    }

    logar(e) {

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((err) => {
                if(err.code === 'auth/wrong-password') {
                    alert('Senha incorreta')
                }
                else {
                    alert('Codigo' + err.code);
                }
            })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Entrar</h1>
                <form onSubmit={this.logar}>
                    <lavel>Email:</lavel><br/>
                    <input type={"text"} value={this.state.email}
                           onChange={(e) => this.setState({email: e.target.value})}/>
                    <br/><label>Senha:</label><br/>
                    <input type={"text"} value={this.state.senha}
                           onChange={(e) => this.setState({senha: e.target.value})}/>
                    <br/><button type={"submit"}>Entrar</button>
                </form>
            </div>
        );
    }
}
