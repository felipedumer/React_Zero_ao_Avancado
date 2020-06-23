import React, {Component} from 'react';
import firebase from "./fireConnection";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            senha: '',
            user: null
        };

        this.cadastrar = this.cadastrar.bind(this);
        this.logar = this.logar.bind(this);
        this.ver = this.ver.bind(this);
        this.sair = this.sair.bind(this);
    }

    componentDidMount() {
        this.ver();
    }

    ver() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user: user});
            }
        })
    }

    cadastrar() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
            .catch((err) => {
                    alert('Codigo' + err.code);
                }
            );
    }

    sair(){
        firebase.auth().signOut()
            .then(()=>{
                this.setState({user: null, email: '', senha:''});
            })
        ;
    }

    logar() {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
            .then((e) => {
                this.setState({email: ''});
            })
            .catch((error) => {
                alert('Error: ' + error);
            })

    }

    render() {
        return (
            <div>
                {this.state.user ?
                    <div>
                        <p>Painel Admin</p>
                        <p>Bem-vindo</p>
                        <p>{this.state.user.email}</p>
                        <p>{this.state.user.uid}</p>
                        <button onClick={this.sair}>Sair</button>
                    </div>
                    :
                    <div>
                        <h1>Seja bem-vindo</h1>
                        <br/>
                        <label>Email:</label><br/>
                        <input type={"email"} value={this.state.email}
                               onChange={(e) => this.setState({email: e.target.value})}/>
                        <br/>
                        <label>Senha:</label>
                        <br/>
                        <input type={"text"} value={this.state.senha}
                               onChange={(e) => this.setState({senha: e.target.value})}/>
                        <br/>
                        <button onClick={this.cadastrar}>Cadastrar</button>
                        <button onClick={this.logar}>Logar</button>
                    </div>
                }
            </div>
        );
    }
}
