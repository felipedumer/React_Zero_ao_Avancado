import React, {Component} from 'react';
import {BemVindo, Container, Head, Titulo} from './styles';

class App extends Component {

    render() {
        return (
            <Container>
                <Head>
                    <Titulo>Projeto styled</Titulo>
                </Head>

                <BemVindo cor={"00FF00"} tamanho={15}>
                    Bem vindo ao sistema
                </BemVindo>
            </Container>
        );
    }
}

export default App;

/*
            <div className={"Container"}>
                <header className={"header"}>
                   <a className={"titulo"}>Projeto Styled</a>
                </header>

                <h1>Bem-vindo!</h1>
            </div>
            */
