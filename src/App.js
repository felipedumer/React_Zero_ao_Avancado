import React, {Component} from 'react';
import firebase from 'firebase';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lista: []
        };

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

        firebase.database().ref('usuarios').on('value', (snapshot) => {
            let state = this.state;
            state.lista = [];

            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                    nome: childItem.val().nome,
                    idade: childItem.val().idade
                })
            });

            this.setState(state);
        });


    }

    render() {
        const {token, nome, idade} = this.state;

        return (
            <div>
                {this.state.lista.map((item) => {
                    return(
                        <div>
                            <h3>ID: {item.key}</h3>
                            <h1>Olá {item.nome}</h1>
                            <h2>Idade: {item.idade}</h2>
                        </div>
                    )
                })}
            </div>
        );
    }
}
