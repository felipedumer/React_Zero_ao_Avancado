import React, {Component} from 'react';
import firebase from 'firebase';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tokenInput : '',
            token: 'Carregando...',
            nome: '',
            idade: ''
        };

        this.cadastrar = this.cadastrar.bind(this);

        let firebaseConfig = {
            apiKey: "AIzaSyC1kaZOBjaO4wbCsD3p5lXE2eecREwX-eI",
            authDomain: "iniciandofirebase-12eb9.firebaseapp.com",
            databaseURL: "https://iniciandofirebase-12eb9.firebaseio.com",
            projectId: "iniciandofirebase-12eb9",
            storageBucket: "iniciandofirebase-12eb9.appspot.com",
            messagingSenderId: "23435037090",
            appId: "1:23435037090:web:60794c791d5f52a7fdcafb",
            measurementId: "G-K182T3L4LC"
        };
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        firebase.analytics();

        // Olheiro
        firebase.database().ref('token').on('value', (snapshot) => {
            let state = this.state;
            state.token = snapshot.val();
            this.setState(state);
        });

        /* consulta única vez
        firebase.database().ref('token').once('value').then((snapshot) => {
            let state = this.state;
            state.token = snapshot.val();
            this.setState(state);
        });*/

        firebase.database().ref('usuarios').child(1).on('value', (snapshot) => {
            let state = this.state;
            state.nome = snapshot.val().nome;
            state.idade = snapshot.val().idade;
            this.setState(state);
        });

    }

    cadastrar (e) {

        // Inserindo novo dado
        // Criar novo dado
        //firebase.database().ref('token').set(this.state.tokenInput);

        let usuarios = firebase.database().ref('usuarios');
        let chave = usuarios.push().key;
        usuarios.child(chave).set({
            nome: this.state.nomeInput,
            idade: this.state.idadeInput
        })

        // criação e atualização
        //firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.tokenInput);

        //firebase.database().ref('usuarios').child(1).child('idade').set(this.state.tokenInput);

        // Remoção
        //firebase.database().ref('usuarios').child(1).child('cargo').remove();

        e.preventDefault();
    }

    render() {
        const {token, nome, idade} = this.state;

        return (
            <div>
                <h1>Token: {token}</h1>
                <h1>Nome: {nome}</h1>
                <h1>Idade: {idade}</h1>

                <form onSubmit={this.cadastrar}>
                    <input type={"text"} value={this.state.idadeInput}
                           onChange={(e) => this.setState({idadeInput: e.target.value})}/>
                           <br/>
                           <input type={"text"} value={this.state.nomeInput}
                           onChange={(e) => this.setState({nomeInput: e.target.value})}/>

                    <button type={"submit"}>Cadastrar</button>
                </form>
            </div>
        );
    }
}
