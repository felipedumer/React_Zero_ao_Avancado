import React, {Component} from 'react';
import firebase from "./fireConnection";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            nome: ''
        };

        this.sair = this.sair.bind(this);
        this.cadastrar = this.cadastrar.bind(this);

        firebase.auth().signOut();

        // verificar se houve alteração no stats
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('usuarios').child(user.uid).set({
                    nome: this.state.nome
                })
            }
        });
    }

    cadastrar(e) {

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((err) => {
                    alert('Codigo' + err.code);
                }
            ).then(() => {
                this.setState({nome: '', email: '', senha: ''});
        });
        e.preventDefault();
    }

    sair (e) {
        firebase.auth().signOut();
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Novo Usuario</h1>
                <form onSubmit={(e) => this.cadastrar(e)}>
                    <br/><label>Nome:</label><br/>
                    <input type={"text"} value={this.state.nome}
                           onChange={(e) => this.setState({nome: e.target.value})}/>
                    <br/><label>Email:</label><br/>
                    <input type={"text"} value={this.state.email}
                           onChange={(e) => this.setState({email: e.target.value})}/>
                    <br/><label>Senha:</label><br/>
                    <input type={"text"} value={this.state.senha}
                           onChange={(e) => this.setState({senha: e.target.value})}/>
                    <br/><button type={"submit"}>Cadastrar</button>
                </form>
                <br/><button onClick={this.sair}>Sair</button>
            </div>
        );
    }
}
