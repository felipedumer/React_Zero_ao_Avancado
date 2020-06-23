import React, {Component} from 'react';
import { HashLink } from 'react-router-hash-link';

class Contato extends Component {

    render() {
        return (
            <div className={"home"} id={"contato"}>
                <h1>Bem-vindo a Contato</h1>
                <h2>SPA na pratica com react JS</h2>
                <h3>Evoluindo everyday</h3>
                <HashLink smooth to={"#home"} style={{color: '#fff'}}>Ir para home</HashLink>
            </div>
        );
    }
}

export default Contato;